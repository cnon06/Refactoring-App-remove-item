

import notesReducer from "../reducers/notesReducer";
import React, { useReducer, useEffect } from "react";



export const NoteContext = React.createContext();


function NoteContextProvider(props) 
{
    const [notes, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
      console.log("loaded");
      const data = JSON.parse(localStorage.getItem("notes"));
      if (data) {
        dispatch({
          type: "POPULATE_NOTES",
          notes: data,
        });
        // setNotes(data);
      }
    }, []);
  
    useEffect(() => {
      console.log("updated");
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (  <NoteContext.Provider value={{notes, dispatch}}>
            {props.children}
        </NoteContext.Provider>
    );
  
}

export default NoteContextProvider;

