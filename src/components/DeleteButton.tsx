import React from 'react';
import { IconButton } from './Layout';

interface DeleteButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <IconButton onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="14" height="14">
        <path d="M10,10L90,90M90,10L10,90" />
      </svg>
    </IconButton>
  );
}
