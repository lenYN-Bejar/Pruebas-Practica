import { getAll } from "../services/notes"

export const noteReducer = (state = [], action) => {
    console.log('ESTA ES DE LA NOTA',action)

    if(action.type === '@notes/init'){
      return action.payload
    }

    if(action.type === '@notes/created'){
      return state.concat(action.payload)
    }

    if(action.type === '@notes/toggle_important') {
        const { id } = action.payload
        return state.map(note => {
            if(note.id === id) {
                return {
                    ...note,
                    important: !note.important
                }
            } 
            return note
        })
    }
 
    return state
  }


export const createNote = note => {
  return {
    type: '@notes/created',
    payload: note
  } 
}

export const toggleImportanceOf = id => {
  return {
    type: '@notes/toggle_important',
    payload:{
      id
    }
  }
}

export const initNotes = () => {
  return async (dispatch) => {

    const notes = await getAll()
    dispatch({
      type: '@notes/init',
      payload: notes
    })
  }
}
 