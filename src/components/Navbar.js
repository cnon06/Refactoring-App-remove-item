import React from 'react'

function Navbar({notes}) {
  return (
   
    <div className="navbar">
        <h1>Note App</h1>
        <p>Total: {notes.length}</p>
    </div>
  )
}

export default Navbar