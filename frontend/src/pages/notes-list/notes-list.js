import { useState, useEffect } from 'react'
import { ListItem } from '../../components/list-item'
import { AddButton } from '../../components/add-button'
import './notes-list.css'

export const NotesList = () => {
  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = async () => {
    const response = await fetch('/api/notes/')
    const data = await response.json()
    setNotes(data)
  }

  return (
    <div className='notes'>
      <div className='notes__header'>
        <h2 className='notes__title'>&#9782; Notes</h2>
        <p className='notes__count'>{notes.length}</p>
      </div>

      <div className='notes__list'>
        {notes.map(note => <ListItem note={note} key={note.id} />)}
      </div>

      <AddButton />
    </div>
  )
}