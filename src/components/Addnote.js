import React, { useState } from 'react'

function Addnote({newNote}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

const addNote = (e) => 
{
e.preventDefault();
newNote(title, description)
setTitle('')
setDescription('')
// console.log("fdffghgj")
}

  return (
    <div>
        <form  className= "input-group" onSubmit={addNote}>
            {/* <p>{title}</p> */}
            {/* <label htmlFor="title">gggfgg</label> */}
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'/>
            <input className="btn btn-outline-secondary" type="submit" value="Add Note" />
        </form>
    </div>
  )
}

export default Addnote