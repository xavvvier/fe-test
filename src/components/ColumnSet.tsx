import styled from '@emotion/styled';
import React from 'react';
import { Flex } from './Layout';
import ColumnItem from '../ColumnItem';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Column } from './Column';

export enum ColumnID {
  column1 = 'column1',
  column2 = 'column2',
}

interface ColumnSetProps {
  column1: ColumnItem[];
  column2: ColumnItem[];
  onItemDelete?: (column: string, item: ColumnItem) => void;
  onItemDragEnd?: (result: DropResult) => void;
}
export function ColumnSet(props: ColumnSetProps) {
  return (
    <DragDropContext onDragEnd={props.onItemDragEnd}>
      <ColumnWrapper direction="row">
        <Column
          items={props.column1}
          title="COLUMN 1"
          id={ColumnID.column1}
          onItemDelete={props.onItemDelete}
        />
        <Column
          items={props.column2}
          title="COLUMN 2"
          id={ColumnID.column2}
          onItemDelete={props.onItemDelete}
        />
      </ColumnWrapper>
    </DragDropContext>
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
