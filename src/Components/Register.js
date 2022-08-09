import React from 'react'

function Register({setLogin}) {
    
  return (
    <div>
        <button onClick={() => setLogin(false)}>login</button>
    </div>
  )
}

export default Register