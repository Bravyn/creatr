import React from 'react';
import './App.css';

function App() {
  return (
<div className="app-container">
  <form className='note-form'>
    <input placeholder='Title' required/>
    <textarea placeholder='content' rows = {10} required />
    <button type='submit'>Add progress note</button>
  </form>
  <div className="notes-grid">
    <div className="note-item">
      <div className="notes-header">
        <button>X</button>
      </div>
      <h2>Note Title</h2>
      <p>Note Content</p>
    </div>
  </div>
</div>

  )
  };

export default App;