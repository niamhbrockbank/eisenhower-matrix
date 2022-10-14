import styled, { css } from "styled-components";

export const Button = styled.button<{
  primary?: boolean;
  newNote?: boolean;
  delete?: boolean;
}>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9967b6;
  color: #9967b6;
  padding: 0.35em 1.5em;
  white-space: nowrap;

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
      right: 20px;
      margin: 0.5em 1em;
    `}

    ${(props) =>
    props.delete &&
    css`
      height: 2em;
      padding: 0.1em 0.5em 0.1em 0.5em;
      position: absolute;
      bottom: 2px;
      right: 2px;
    `}
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  height: 2em;
  padding: 0.1em 0.5em 0.1em 0.5em;
  position: absolute;
  bottom: 2px;
  right: 2px;
`;

export const NoteStyle = styled.div`
  z-position: fixed;
  z-index: 100;
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 200;
`;

export const ModalBody = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgb(230, 223, 232);
  font-size: 10pt;
  padding: 20px 30px;
  box-shadow: 1px 3px 3px;
  border-radius: 0px 0px 1px;
  position: fixed;
  left: calc(50vw - 250px);
  top: calc(50vh - 250px);
  z-index: 230;
`;
