import { Link } from 'react-router-dom'
import './list-item.css'

export const ListItem = ({ note }) => {
  const getTitle = () => {
    const title = note.body.split('\n')[0]
    
    if(title.length > 45) {
      return title.slice(0, 45)
    }

    return title
  }

  const getTime = () => {
    return new Date(note.updated).toLocaleDateString()
  }

  const getContent = () => {
    const title = getTitle()
    
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if(content.length > 45) {
      return content.slice(0, 45) + '...'
    }

    return content
  }

  return (
    <Link to={`/note/${note.id}`}>
      <div className='item'>
        <h3 className='item__title'>{getTitle()}</h3>
        <p className='item__description'>
          <span className='item__time'>{getTime()}</span>
          {getContent()}
        </p>
      </div>
    </Link>
  )
}