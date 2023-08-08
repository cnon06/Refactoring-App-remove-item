
import React from "react";
import Addnote from "./Addnote";
import Navbar from "./Navbar";
import NoteList from "./Notelist";
import NoteContextProvider from "../contexts/notesContext";

function NoteApp() {
 
  return (
   
    <NoteContextProvider >
  <div className="container mt-3">
    <Navbar />
    <NoteList />

    <Addnote />
  </div>
    
      </NoteContextProvider>

  );
}

export default NoteApp;