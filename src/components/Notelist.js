import React from 'react'
import Note from './Note';

function NoteList({notes, removeNote}) {
  return notes.length > 0 ?(


    <div className="note-list">

    <ul >
    {notes.map((note, index) => {
      return (
        <Note key={index} note={note} index={index} removeNote={removeNote}/>
        // <li key={index}>
        //   {note.id} {note.title}
        // </li>
      );
    })}
  </ul>
    </div>
  ) :
  (
<div className="empty" >Henüz not eklemediniz</div>
  )
}

export default NoteList