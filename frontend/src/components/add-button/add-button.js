import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import './add-button.css'

export const AddButton = () => {
  return (
    <Link to='/note/new' className='add-button'>
      <AddIcon />
    </Link>
  )
}