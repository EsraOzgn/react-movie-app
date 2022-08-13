import React, { useState } from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Register({setLogin}) {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const clickLogin = () => {
    if (username === "esra" && password === "123456") {
      setLogin(false)
    }
  }
  return (
<>
  <main className="mx-auto flex min-h-screen w-[100%] items-center justify-center border-4 rounded-lg bg-gradient-to-t from-sky-300 to-gray-700 text-white">
      <div className='home absolute top-2 right-2 h-10 w-10' onClick={() => setLogin(false)}><AiOutlineCloseCircle size={35}/></div>
        <section className=" flex w-[32rem] flex-col space-y-10">
          <div className="ml-[40%] text-4xl font-medium "><FaRegUserCircle size={70}/></div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-cyan-900">
              <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
           </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-cyan-900">
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
      </div>
            <button onClick={clickLogin} className="transform rounded-sm bg-cyan-900 py-2 m-[35%] w-[150px] font-bold duration-300 hover:bg-cyan-500"> LOG IN </button>
        </section>
  </main>
</>
  )
}

export default Register