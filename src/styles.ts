import styled, { css } from "styled-components";

export const Button = styled.button<{ primary?: boolean; newNote?: boolean; delete? : boolean}>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9967b6;
  color: #9967b6;
  padding: 0.35em 1.5em;

  ${(props) =>
    props.primary &&
    css`
      background: #9967b6;
      color: white;
    `}

  ${(props) =>
    props.newNote &&
    css`
      position: fixed;
      top: 15px;
      left: 650px;
      margin: 0.5em 1em;
    `}

    ${(props) =>
      props.delete &&
      css`
        height : 2em;
        padding : 0.1em 0.5em 0.1em 0.5em;
        position : absolute;
        bottom : 2px;
        right : 2px;
      `}
`;

export const DeleteButton = styled.button`
  background: transparent; 
  border : none;
  height : 2em;
  padding : 0.1em 0.5em 0.1em 0.5em;
  position : absolute;
  bottom : 2px;
  right : 2px;
`