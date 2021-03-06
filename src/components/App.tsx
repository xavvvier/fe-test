import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import { Header, Flex, Hero, FlexForm, SearchInput } from './Layout';
import ColumnItem from '../ColumnItem';
import { ColumnSet, ColumnID } from './ColumnSet';
import { DropResult } from 'react-beautiful-dnd';

const Main = styled.main`
  font-family: HelveticaNeue, Helvetica, sans-serif;
  color: white;
  max-width: 500px;
  margin: 24px auto 60px;
`;

export default function App() {
  const [selectedColumn, setSelectedColumn] = useState('');
  const [itemName, setItemName] = useState('');
  const [filter, setFilter] = useState('');
  const [column1Items, setColumn1Items] = useColumnItemsWithStorage(ColumnID.column1);
  const [column2Items, setColumn2Items] = useColumnItemsWithStorage(ColumnID.column2);
  const filteredColumn1 = useColumnItemFilter(filter, column1Items);
  const filteredColumn2 = useColumnItemFilter(filter, column2Items);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColumn(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };
  const handleItemDelete = (column: string, item: ColumnItem) => {
    setForColumn(column)((previous) => previous.filter((current) => current.id !== item.id));
  };
  const handleAddItem = () => {
    let newColumnItem = {
      id: uuid4(),
      name: itemName,
    };
    if (selectedColumn) {
      setForColumn(selectedColumn)((previous) => previous.concat(newColumnItem));
      setItemName('');
    }
  };
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    // Element dropped at the same location where it started
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    // Remove item from source column
    setForColumn(source.droppableId)((items) =>
      items.filter((item, index) => index !== source.index)
    );
    // Add item to destination column
    setForColumn(destination.droppableId)((items) => {
      const item = getItemInColumn(source.droppableId, draggableId);
      const leftHand = items.slice(0, destination.index);
      const rightHand = items.slice(destination.index);
      return [...leftHand, item, ...rightHand];
    });
  };

  const getItemInColumn = (columnId: string, itemId: string): ColumnItem | undefined => {
    const items = columnId === ColumnID.column1 ? column1Items : column2Items;
    return items.find((item) => item.id === itemId);
  };
  const setForColumn = (columnId: string): React.Dispatch<React.SetStateAction<ColumnItem[]>> => {
    return columnId === ColumnID.column1 ? setColumn1Items : setColumn2Items;
  };

  return (
    <Main>
      <Flex>
        <Hero>
          <h1>Marvelous!</h1>
          <p>
            Lorem Ipsum is simpy dummy text of the printing and typesetting industry. Lorem ipsum
            has been the industry's standard dummy text ever since.
          </p>
        </Hero>
        <Header>ADD AN ITEM</Header>
        <Flex>
          <Flex direction="row">
            <FlexForm>
              <input
                type="text"
                value={itemName}
                onChange={handleNameChange}
                placeholder="ENTER ITEM"
              />
              <select defaultValue={selectedColumn} onChange={handleColumnChange}>
                <option value="" disabled hidden>
                  CHOOSE COLUMN
                </option>
                <option value={ColumnID.column1}>COLUMN 1</option>
                <option value={ColumnID.column2}>COLUMN 2</option>
              </select>
              <button onClick={handleAddItem}>ADD ITEM</button>
              <label htmlFor="search"> SEARCH AN ITEM </label>
              <SearchInput
                placeholder="SEARCH"
                id="search"
                value={filter}
                onChange={handleFilterChange}
                type="text"
              />
            </FlexForm>
            <ColumnSet
              column1={filteredColumn1}
              column2={filteredColumn2}
              onItemDelete={handleItemDelete}
              onItemDragEnd={handleDragEnd}
            />
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
}

function useColumnItemFilter(filter: string, items: ColumnItem[]) {
  const [filtered, setFiltered] = useState(items);
  useEffect(() => {
    if (filter) {
      setFiltered(items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())));
    } else {
      setFiltered(items);
    }
  }, [filter, items]);
  return filtered;
}

function useColumnItemsWithStorage(
  key: string
): [ColumnItem[], React.Dispatch<React.SetStateAction<ColumnItem[]>>] {
  const [columnItems, setColumnItems] = useState<ColumnItem[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      const items = JSON.parse(stored);
      setColumnItems(items);
    }
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    // Avoid re-write the items on storage if we have just read them
    if (isInitialLoad) {
      return;
    }
    if (columnItems && columnItems.length) {
      localStorage.setItem(key, JSON.stringify(columnItems));
    } else {
      localStorage.removeItem(key);
    }
  }, [columnItems]);

  return [columnItems, setColumnItems];
}
