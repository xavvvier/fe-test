import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  Header,
  Flex,
  Hero,
  ColumnSet,
  Column,
  ColumnHeader,
  Item,
  FlexForm,
  SearchInput,
  DeleteButton,
} from './Layout';

const Main = styled.main`
  font-family: HelveticaNeue, Helvetica, sans-serif;
  color: white;
  max-width: 500px;
  margin: 0 auto;
`;

export default function App() {
  const columns = [
    { id: 0, name: 'CHOOSE COLUMN' },
    { id: 1, name: 'Column 1' },
    { id: 2, name: 'Column 2' },
  ];
  const column1 = [
    {
      id: 1,
      name: 'Item',
    },
    {
      id: 2,
      name: 'Item long deescription with too much text',
    },
    {
      id: 3,
      name: 'Item',
    },
    {
      id: 4,
      name: 'Item',
    },
    {
      id: 5,
      name: 'Item',
    },
    {
      id: 6,
      name: 'Item',
    },
  ];
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
              <input type="text" placeholder="ENTER ITEM" />
              <select defaultValue="">
                {columns.map(({ id, name }) => (
                  <option key={id} value={id} disabled={id === 0}>
                    {name}
                  </option>
                ))}
              </select>
              <button>ADD ITEM</button>
              <label htmlFor="search"> SEARCH AN ITEM </label>
              <SearchInput placeholder="SEARCH" id="search" type="text" />
            </FlexForm>
            <ColumnSet direction="row">
              <Column>
                <ColumnHeader>COLUMN 1</ColumnHeader>
                {column1.map((item) => (
                  <Item key={item.id}>
                    {item.name}
                    <DeleteButton />
                  </Item>
                ))}
              </Column>
              <Column>
                <ColumnHeader>COLUMN 2</ColumnHeader>
                {column1.map((item) => (
                  <Item key={item.id}>
                    {item.name}
                    <DeleteButton />
                  </Item>
                ))}
              </Column>
            </ColumnSet>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
}
