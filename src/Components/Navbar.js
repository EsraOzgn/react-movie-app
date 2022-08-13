import React from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {GiMountaintop} from 'react-icons/gi'
import {CgDarkMode} from 'react-icons/cg'
import {BsFillMoonFill} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

const Navbar = ({setWatchList,movies,query,setQuery,setMovies,setLogin,setMode,mode}) => {
const searchMovie = async(e)=> {
    e.preventDefault();
    console.log('Searching')
    console.log(query)
      try{
        const url=`https://api.themoviedb.org/3/search/movie?api_key=235aacbb714045d19f54d689f8caa5b2&query=${query}`;
        const res= await fetch(url);
        const data= await res.json();
        console.log(data);
        setMovies(data.results);
        }
        catch(e){
          console.log(e);
        } 
    }
        const changeHandler=(e)=> {
        setQuery(e.target.value);
        }

  return (
    // navbar
<div>
  <nav className={mode ? "bg-gradient-to-t from-gray-400 to-gray-800 text-white flex gap-x-8 text-sm justify-around items-center " : "flex gap-x-8 bg-gradient-to-t from-cyan-100 to-gray-700 text-sm justify-around items-center"}>

      <div className="font-medium px-3 py-2 text-gray-900 rounded-lg"><GiMountaintop size={40}/></div>
      <form className='w-[40%] ' onSubmit={searchMovie} >
        <input type='Search'  placeholder='Search' className=' w-[80%] rounded-xl h-9 outline-none p-4' aria-label='Search' name='query' value={query} onChange={changeHandler} onSubmit={searchMovie}></input>
      </form>
  
      <div onClick={()=> setWatchList(true)}  className="flex justify-center font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 cursor-pointer"><AiOutlinePlusCircle size={20}/>Watchlist</div>

      <div onClick={()=> setLogin(true)}  className="flex justify-center font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 "> <AiOutlineUserAdd size={20}/> Log In</div>

      <div onClick={()=> setMode(!mode)} className="flex justify-center font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900"> {mode ? <BsFillMoonFill size={20}/> : <FiSun size={20}/>}
        <p className=" relative group">
          <span> {mode ? "Dark" : "Light"} </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
        </p> 
      </div>
  </nav>
</div>
  )
}

export default Navbar

