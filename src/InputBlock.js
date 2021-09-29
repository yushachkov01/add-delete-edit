import { useDispatch } from 'react-redux';
import { useState } from 'react';

function InputBlock() {

  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const saveContact = () => {
    dispatch({ type: 'SEND_NEW_CONTACT', payload: input }) // {type: 'SEND_ANTON', payload: input} - отправляем action
    setInput('')
  }

  return (
    <div className='inputBlock' >
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your note pls' />
      <button onClick={saveContact}>Save</button>
    </div>
  )
}

export default InputBlock


{/*  ЧЕРНОВИК!!! со стилями еще потренироваться!!! особенно с display:flex!!! *
<div style={{width:'100%', height:'100%', backgroundcolor:'red', display:'flex', justifyContent:'center'}}></div> */}