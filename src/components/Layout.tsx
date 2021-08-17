import styled from '@emotion/styled';
import React from 'react';

export const Header = styled.h4`
  background: linear-gradient(#c2cad6, rgba(153, 167, 185, 0.6) 75%, #818fa1);
  color: white;
  padding: 10px;
  text-align: center;
`;

interface FlexProps {
  readonly direction?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: ${(props) => props.direction || 'column'};
  }
`;

export const FlexForm = styled(Flex)`
  margin-right: 8px;
  & input {
    height: 31px;
    border: 2px solid white;
    background-color: #9ca1ab;
    color: white;
    outline: 0;
    padding: 1px 10px;
    &:focus {
      border-color: #4a5569;
    }
    &::-webkit-input-placeholder {
      color: #d5d7db;
    }
  }
  & select {
    appearance: none;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'><polygon points='0,0 100,0 50,50'/></svg>")
      no-repeat;
    background-size: 12px;
    background-position: calc(100% - 8px) 12px;
    background-repeat: no-repeat;
    background-color: #9ca1ab;
    height: 36px;
    border: 2px solid white;
    color: #d5d7db;
    outline: 0;
    padding: 0 22px 0 10px;
    &:focus {
      border-color: #4a5569;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%234a5569'><polygon points='0,0 100,0 50,50'/></svg>")
        no-repeat;
      background-size: 12px;
      background-position: calc(100% - 8px) 12px;
      background-repeat: no-repeat;
      background-color: #9ca1ab;
    }
  }
  label {
    color: white;
    margin-top: 25px;
    font-weight: bold;
  }
  button {
    border: 2px solid white;
    background-color: transparent;
    color: white;
    margin-top: 77px;
    padding: 10px;
    outline: 0;
    &:focus {
      border-color: #4a5569;
    }
  }
`;

export const SearchInput = styled.input`
  border: 2px solid white;
  color: white;
  outline: 0;
  margin-top: 5px;
  padding: 12px;
  padding-right: 40px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='164' height='163'><path fill='white' d='M120.97 114.34L115.31 120C113.81 121.5 111.78 122.34 109.66 122.34C107.54 122.34 105.5 121.5 104 120L72.38 89.35C65.23 93.57 56.9 96 48 96C21.49 96 0 74.51 0 48C0 21.49 21.49 0 48 0C74.51 0 96 21.49 96 48C96 56.9 93.57 65.23 89.35 72.38L120.97 103.03C124.1 106.15 124.1 111.22 120.97 114.34ZM48 80C65.67 80 80 65.67 80 48C80 30.33 65.67 16 48 16C30.33 16 16 30.33 16 48C16 65.67 30.33 80 48 80Z' /></svg>")
    no-repeat;
  background-size: 20px;
  background-position: calc(100% - 2px) 9px;
  background-repeat: no-repeat;
  background-color: #9ca1ab;
  &:focus {
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='164' height='163'><path fill='%234a5569' d='M120.97 114.34L115.31 120C113.81 121.5 111.78 122.34 109.66 122.34C107.54 122.34 105.5 121.5 104 120L72.38 89.35C65.23 93.57 56.9 96 48 96C21.49 96 0 74.51 0 48C0 21.49 21.49 0 48 0C74.51 0 96 21.49 96 48C96 56.9 93.57 65.23 89.35 72.38L120.97 103.03C124.1 106.15 124.1 111.22 120.97 114.34ZM48 80C65.67 80 80 65.67 80 48C80 30.33 65.67 16 48 16C30.33 16 16 30.33 16 48C16 65.67 30.33 80 48 80Z' /></svg>")
      no-repeat;
    background-size: 20px;
    background-position: calc(100% - 2px) 9px;
    background-repeat: no-repeat;
    border-color: #4a5569;
  }
  &::-webkit-input-placeholder {
    color: #d5d7db;
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  width: 28px;
  height: 28px;
  border-radius: 9px;
  float: right;
  & svg {
    position: relative;
    stroke: white;
    stroke-width: 16;
  }
`;
export const Hero = styled.section`
  & h1 {
    font-family: 'Merriweather', serif;
    font-style: italic;
    font-size: 36px;
    margin-bottom: 5px;
  }
  & p {
    font-size: 12px;
    color: #8fffee;
    max-width: 325px;
    margin-top: 10px;
    letter-spacing: 1px;
    line-height: 15px;
  }
`;
