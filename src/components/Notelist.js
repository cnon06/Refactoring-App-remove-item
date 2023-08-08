import React, {useContext } from "react";
import {NoteContext}   from "../contexts/notesContext";
import Note from './Note';


function NoteList() {

  const { notes, dispatch } = useContext(NoteContext);
  return notes.length > 0 ?(


    <div className="note-list">

    <ul >
    {notes.map((note, index) => {
      return (
        <Note key={index} note={note} index={index} dispatch={dispatch}/>
       
      );
    })}
  </ul>
    </div>
  ) :
  (
<div className="empty" >
You haven't added any notes yet</div>
  )
}

export default NoteList