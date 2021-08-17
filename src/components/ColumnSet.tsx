import styled from '@emotion/styled';
import React from 'react';
import { Flex } from './Layout';
import DeleteButton from './DeleteButton';
import ColumnItem from '../ColumnItem';

export enum ColumnID {
  column1 = 'column1',
  column2 = 'column2',
}

interface ColumnSetProps {
  column1: ColumnItem[];
  column2: ColumnItem[];
  onItemDelete?: (column: string, item: ColumnItem) => void;
}
export function ColumnSet(props: ColumnSetProps) {
  const { column1, column2, onItemDelete } = props;
  const handleClick = (column: string, item: ColumnItem) => {
    onItemDelete && onItemDelete(column, item);
  };
  return (
    <ColumnWrapper direction="row">
      <Column>
        <ColumnHeader>COLUMN 1</ColumnHeader>
        {column1.map((item) => (
          <Item key={item.id}>
            <span>
              {item.name}
              </span>
            <DeleteButton onClick={(e) => handleClick('column1', item)} />
          </Item>
        ))}
      </Column>
      <Column>
        <ColumnHeader>COLUMN 2</ColumnHeader>
        {column2.map((item) => (
          <Item key={item.id}>
            <span>
              {item.name}
              </span>
            <DeleteButton onClick={(e) => handleClick('column2', item)} />
          </Item>
        ))}
      </Column>
    </ColumnWrapper>
  );
}

const ColumnWrapper = styled(Flex)`
  padding: 2px;
  background-color: white;
  flex: 1;
  & > div {
    flex: 1;
    margin: 2px;
    background: #79818f;
  }
`;
export const Column = styled.div``;
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

export const ColumnHeader = styled.div`
  background: linear-gradient(#b8c7da, rgb(74, 85, 105, 0.85) 75%, #4a5569);
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 11px;
`;
