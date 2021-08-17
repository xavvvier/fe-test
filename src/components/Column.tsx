import React from 'react';
import styled from '@emotion/styled';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import DeleteButton from './DeleteButton';
import ColumnItem from '../ColumnItem';

interface ColumnProps {
  items: ColumnItem[];
  id: string;
  title: string;
  onItemDelete?: (column: string, item: ColumnItem) => void;
}

export function Column(props: ColumnProps) {
  const handleClick = (column: string, item: ColumnItem) => {
    props.onItemDelete && props.onItemDelete(column, item);
  };
  return (
    <Droppable droppableId={props.id}>
      {(provided) => (
        <Container {...provided.droppableProps} ref={provided.innerRef}>
          <ColumnHeader>{props.title}</ColumnHeader>
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(providedI) => (
                <Item
                  {...providedI.draggableProps}
                  {...providedI.dragHandleProps}
                  ref={providedI.innerRef}
                >
                  <span>{item.name}</span>
                  <DeleteButton onClick={(e) => handleClick(props.id, item)} />
                </Item>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #bcc0c7;
  color: white;
  align-items: center;
  padding: 4px;
  padding-left: 10px;
  font-size: 12px;
  &:nth-of-type(even) {
    background-color: #f2f3f4;
    color: #858c98;
    & button {
      border-color: #7c8390;
    }
    & svg {
      stroke: #7c8390;
    }
  }
  & span {
    flex: 1;
  }
`;

export const Container = styled.div``;
export const ColumnHeader = styled.div`
  background: linear-gradient(#b8c7da, rgb(74, 85, 105, 0.85) 75%, #4a5569);
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 11px;
`;
