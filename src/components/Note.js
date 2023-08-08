import React, {useContext } from "react";
import {NoteContext} from "../contexts/notesContext";




function Note({ index, note }) {
  const { dispatch } = useContext(NoteContext);
  const removeNote = (id) => {
    dispatch({type:"REMOVE_NOTE",
    id
  
  }) }

  return (
    <li key={index} onClick={() => removeNote(note.id)}>
      <h3 className="title">
        {note.id} {note.title}
      </h3>
      <p>{note.description}</p>
    </li>
  );
}

export default Note;
