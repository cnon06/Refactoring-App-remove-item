import React, { useState, useContext } from "react";
import {NoteContext} from "../contexts/notesContext";

function Addnote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch, notes } = useContext(NoteContext);

  const addNote = (e) => {
    e.preventDefault();
    
    dispatch({
      type: "ADD_NOTE",
      id: notes.length + 1,
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
   
  };



  return (
    <div>
      <form className="input-group" onSubmit={addNote}>
     
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          className="btn btn-outline-secondary"
          type="submit"
          value="Add Note"
        />
      </form>
    </div>
  );
}

export default Addnote;
