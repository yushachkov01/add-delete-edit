import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

const ListItem = ({ contact, i }) => {
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState(contact);


  const dispatch = useDispatch()

  const saveEditedValue = (val) => {
    dispatch({ type: 'SAVE_EDITED_CONTACT', payload: { oldValue: contact, newValue: input } })
    setEditMode(!editMode);
  }

  const deleteContact = (val) => {
    dispatch({ type: 'DELETE_CONTACT', payload: val })
  }

  return !editMode ?
    (
      <li key={i} >{contact}
        <button onClick={() => setEditMode(!editMode)}>Edit</button>
        <button onClick={() => deleteContact(contact)}>Delete</button>
      </li>
    ) :
    <li key={i}><input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => saveEditedValue(input)}>Save</button>
    </li>
}


function OutputBlock() {

  const contacts = useSelector(state => state.contacts)

  return (
    <ol className="outputBlock">
      {contacts.map((contact, i) => {
        return <ListItem i={i} contact={contact} />
      })}
    </ol>


  )
}
export default OutputBlock