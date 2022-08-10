import React, { useState } from 'react'


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
    <div className="home" onClick={() => setLogin(false)}>HOME</div>
    <main
    className="mx-auto flex min-h-screen w-[40%] items-center justify-center border-4 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500  text-white">


    
    <section className=" flex w-[32rem] flex-col space-y-10">
      <div className="text-center text-4xl font-medium">Log In</div>
  
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>
  
           <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
             <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
           </div>
  
             <button  onClick={clickLogin} className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"> LOG IN </button>
  
      <a href="#" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
  
      <p className="text-center text-lg">No account?
        <a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
      </p>
    
    </section>
   
  </main>
  </>
  )
}

export default Register