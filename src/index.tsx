import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const Main = styled.main`
  font-family: HelveticaNeue, Helvetica, sans-serif;
  color: white;
`;

interface FlexProps {
  readonly direction?: string;
}
const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: ${(props) => props.direction || 'column'};
  }
`;
const Hero = styled.section`
  & h1 {
    font-family: 'Merriweather', serif;
    font-style: italic;
    font-size: 36px;
  }
`;

const Column = styled.div``;
const ColumnHeader = styled.div``;
const Item = styled.div``;
const Header = styled.h2``;

function App() {
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
            <Flex>
              <input type="text" />
              <select>
                <option value="" disabled selected>
                  CHOOSE COLUMN
                </option>
                <option value="1">Column 1</option>
                <option value="2">Column 2</option>
              </select>
              <button>ADD ITEM</button>
              <label htmlFor="search"> SEARCH AN ITEM </label>
              <input placeholder="SEARCH" id="search" type="text" />
            </Flex>
            <Column>
              <ColumnHeader>COLUMN 1</ColumnHeader>
              <Item>ITEM</Item>
              <Item>ITEM</Item>
              <Item>ITEM</Item>
              <Item>ITEM</Item>
            </Column>
            <Column>
              <ColumnHeader>COLUMN 2</ColumnHeader>
              <Item>ITEM</Item>
              <Item>ITEM</Item>
              <Item>ITEM</Item>
            </Column>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
