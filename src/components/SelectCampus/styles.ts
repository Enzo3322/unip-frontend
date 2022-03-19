import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 3px;
  border: 2px solid #ccc;
  padding: 16px;
  width: 100%;
  display: flex;
  color: #222;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #075ebd;
      border-color: #075ebd;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #075ebd;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #222;

    &::placeholder {
      color: #aaa;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
