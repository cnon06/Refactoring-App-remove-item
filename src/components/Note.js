import React from 'react'

function Note({index,note, removeNote}) {
  return (
    <li key={index} onClick={()=>removeNote(note.id)}>
    {note.id} {note.title}
  </li>
  )
}

export default Note