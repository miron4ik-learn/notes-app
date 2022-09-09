import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import './App.css'
import { Header } from './components/header'

import { NotesList as NotesListPage } from './pages/notes-list'
import { NoteSingle as NotePage } from './pages/note-single'

function App() {
  return (
    <Router>
      <div className='container dark'>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' exact element={<NotesListPage />} />
            <Route path='/note/:noteId' element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App