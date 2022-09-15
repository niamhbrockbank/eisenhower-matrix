import styled, { css } from 'styled-components'
import addNewNote from '../../utils/addNewNote';

const Button = styled.button<{primary?: boolean}>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9967B6;
  color: #9967B6;
  margin: 0.5em 1em;
  padding: 0.35em 1.5em;
  position:fixed;
  bottom: 30px;
  right: 30px;

  ${props => props.primary && css`
    background: #9967B6;
    color: white;
  `}
`;

export default function NewNoteButton():JSX.Element{
    return <Button primary={true} onClick={addNewNote}>New Note</Button>
}