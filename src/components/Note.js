import React from "react";

function Note({ index, note, removeNote }) {
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
