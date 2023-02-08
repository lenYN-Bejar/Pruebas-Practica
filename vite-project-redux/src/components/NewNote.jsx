import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteReducer"
import { createNew } from "../services/notes"


export default function NewNote () {

    const dispatch = useDispatch()

    const addNote = async (evt) => {
        evt.preventDefault()
        const {target} = evt
        const content = target.note.value
        target.note.value = ''
        const newNote = await createNew(content)
        dispatch(createNote(newNote))
      }
    
    return (
        <form onSubmit={addNote}>
           <input name="note"></input>
           <button>add</button> 
        </form>
    )
}