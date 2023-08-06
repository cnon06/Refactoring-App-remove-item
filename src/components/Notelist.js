import React from 'react'
import Note from './Note';

function NoteList({notes, removeNote}) {
  return (
    <ul className="note-list">
    {notes.map((note, index) => {
      return (
        <Note note={note} index={index} removeNote={removeNote}/>
        // <li key={index}>
        //   {note.id} {note.title}
        // </li>
      );
    })}
  </ul>
  )
}

export default NoteList