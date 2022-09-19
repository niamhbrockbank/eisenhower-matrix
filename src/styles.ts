import styled, { css } from "styled-components";

export const Button = styled.button<{ primary?: boolean, newNote? : boolean }>`
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
    right: 30px;
    margin: 0.5em 1em;
  `}
`;