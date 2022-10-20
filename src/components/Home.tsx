import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useCallback, useEffect, useState } from "react";
import "../App.css";
import MatrixBackground from "./MatrixBackground/MatrixBackground";
import NewNote from "./NewNote/NewNote";
import Title from "./Title";
import { Note } from "../types";

export default function Home():JSX.Element{
    const [notesArr, setNotesArr] = useState<Note[]>([]);

    const getNotes = useCallback(async () => {
        const response = await axios.get(
        "https://priorities-measure.herokuapp.com/notes"
        );
        setNotesArr(response.data);
    }, [setNotesArr]);

    useEffect(() => {
        getNotes();
    }, [getNotes]);

    return (
    <>
        <Title />
        <NewNote setNotesArr={setNotesArr} getNotes={getNotes} />
        <div id="drop_area">
            <MatrixBackground
            getNotes={getNotes}
            notesArr={notesArr}
            setNotesArr={setNotesArr}
            />
        </div>
    </>
    )
}