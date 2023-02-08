import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

export default function Notes () {

    const state = useSelector(state => state.notes) 
    const dispatch = useDispatch()
    const toggleImportant = (id) => {
        dispatch(toggleImportanceOf(id))
      }
    
    return(
        <ul>
        {
          state.map(note => {
            return <li key={note.id} onClick={() => toggleImportant(note.id)}>
              {note.content}
              <strong>
                {note.important ? 'important': 'not Important'}
              </strong>
            </li>
          })
        }
      </ul>
    )
}