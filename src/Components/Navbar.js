import React from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsBookmarkPlus} from 'react-icons/bs'
import {GiSeaTurtle} from 'react-icons/gi'
import {CgDarkMode} from 'react-icons/cg'






const Navbar = ({movies,query,setQuery,setMovies,setLogin,login}) => {

    const searchMovie = async(e)=> {
        e.preventDefault();
        console.log('Searching')
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
    <div>
        <nav className="flex gap-x-8 bg-gray-800 text-sm justify-around items-center">
  <a href="/dashboard" className="font-medium px-3 py-2 text-blue-300 rounded-lg"><GiSeaTurtle size={40}/></a>


<form className='w-[40%]' onSubmit={searchMovie} >

    <input type='Search'  placeholder='Search' className='w-[80%] rounded-xl h-9 outline-none p-4' aria-label='Search' name='query' value={query} onChange={changeHandler} onSubmit={searchMovie} ></input>

</form>
  
  <a href="#" className="font-medium px-3 py-2 text-blue-400 rounded-lg hover:bg-slate-100 hover:text-slate-900"><BsBookmarkPlus/> Watchlist</a>
  <a onClick={()=> setLogin(true)} href="#" className="font-medium px-3 py-2 text-blue-400 rounded-lg hover:bg-slate-100 hover:text-slate-900"> <AiOutlineUserAdd/> Sign In</a>
  <a href="#" className="font-medium px-3 py-2 text-blue-400 rounded-lg hover:bg-slate-100 hover:text-slate-900"> <CgDarkMode/> Dark/Light</a>
</nav>

    </div>
  )
}

export default Navbar