import React, { useState } from 'react';
import './App.css';

function App() {
  type Note = {
    id: number;
    title: string;
    content: string;
  }

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Title: ", title);
    console.log("Content: ", content)
  };
  
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Test note 1",
      content: "This is a test note"
    },
    {
      id: 2,
      title: "Test note 2",
      content: "This is a test note"
    },
    {
      id: 3,
      title: "Test note 3",
      content: "This is a test note"
    },
    {
      id: 4,
      title: "Test note 4",
      content: "This is a test note"
    },
    {
      id: 5,
      title: "Test note 5",
      content: "This is a test note"
    },
    {
      id: 6,
      title: "Test note 6",
      content: "This is a test note"
    }


  ])
  return (
    <div className="app-container">

      <form className='note-form'>

        <input

          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder='Task Title'
          required

        ></input>

        <textarea

          value = { content }
          onChange={ (event) => setContent(event.target.value)}
          placeholder='Task Content'
          rows={10} 
          required
          
        ></textarea>

        <button type='submit'>Add progress note</button>

      </form>

      <div className="notes-grid">

        {notes.map((note) => (

          <div className="note-item">

            <div className="notes-header">

              <button>X</button>

            </div>

            <h2>{note.title}</h2>
            <p>{note.content}</p>

          </div>

        )

        )}

      </div>
    </div>

  )
};

export default App;