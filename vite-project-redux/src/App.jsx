import NewNote from './components/NewNote'
import Notes from './components/Notes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initNotes } from './reducers/noteReducer'
import './App.css'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initNotes())
  },[dispatch])

  return(
    <div>
      <NewNote></NewNote>
      <div>
        all
        <input type="radio" name='filter' onChange={() => filterSelected('ALL')}/>
        important
        <input type="radio" name='filter' onChange={() => filterSelected('IMPORTANT')}/>
        not_Important
        <input type="radio" name='filter' onChange={() => filterSelected('NO_IMPORTANT')}/>
      </div>
      <Notes></Notes>
    </div>
  )
}

export default App
