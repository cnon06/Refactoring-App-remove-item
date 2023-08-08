
import React, {useContext } from "react";
import {NoteContext} from "../contexts/notesContext";

function Navbar() {
  const { notes } = useContext(NoteContext);
  return (
   
    <div className="navbar">
        <h1>Note App</h1>
        <p>Total: {notes.length}</p>
    </div>
  )
}

export default Navbar