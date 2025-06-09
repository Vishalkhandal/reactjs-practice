import React from 'react'

function Form({...props}) {
  return (
    <>
        <form style={{display: 'flex', flexDirection: 'column', justifyContent:'center', margin:'auto', gap: '1rem', ...props.style}}>
            <input type="text" name='Name' placeholder='Name' required />
            <input type="number" name='peopleCount' placeholder='How many people' />
            <input type="email" name='email' placeholder='email' />
            <textarea name="message" id="message" placeholder='Enter your message' rows='5'></textarea>
            <button>Submit</button>
        </form>
    </>
  )
}

export default Form