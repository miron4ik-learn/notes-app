import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import { csrf_token } from '../../utils'
import './note-single.css'

export const NoteSingle = () => {
  const history = useNavigate()

  const { noteId } = useParams()
  const [ note, setNote ] = useState(null)

  useEffect(() => {
    getNote()
  }, [ noteId ])

  const getNote = async () => {
    if(noteId !== 'new') {
      const response = await fetch(`/api/notes/${noteId}/`)
      const data = await response.json()
      setNote(data)
    }
  }

  const updateNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf_token(),
      },
      body: JSON.stringify(note),
    })
  }

  const createNote = async () => {
    fetch(`/api/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf_token(),
      },
      body: JSON.stringify(note),
    })
  }

  const deleteNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf_token(),
      },
    })
    history('/')
  }

  const handleSubmit = () => {
    if(noteId !== 'new' && !note.body.trim()) {
      deleteNote()
    } else if(noteId !== 'new') {
      updateNote()
    } else if(noteId === 'new' && note !== null) {
      createNote()
    }

    history('/')
  }

  const handleChange = (value) => {
    setNote({ ...note, body: value })
  }

  return (
    <div className='note'>
      <div className='note__header'>
        <h3 className='note__title'>
          <ArrowLeft onClick={handleSubmit} />
        </h3>

        {noteId !== 'new'
          ? <button className='note__btn' onClick={deleteNote}>Delete</button>
          : <button className='note__btn' onClick={handleSubmit}>Done</button>
        }
      </div>

      <textarea
        onChange={e => handleChange(e.target.value)}
        value={note?.body}
        className='note__textarea'
      ></textarea>
    </div>
  )
}