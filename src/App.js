import React, { useState, useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox'
import Navbar from './Components/Navbar'
import Register from './Components/Register';
import WatchList from './Components/WatchList';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=235aacbb714045d19f54d689f8caa5b2";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=235aacbb714045d19f54d689f8caa5b2&query"

function App() {
const [watchList,setWatchList] = useState(false)
const [movies, setMovies]=useState([]);
const [query, setQuery]=useState('')
const [login,setLogin] = useState(false)
const [movieList,setMovieList] = useState([])
const [mode,setMode] = useState(false)


useEffect(()=>{
  fetch(API_URL)
  .then((res)=>res.json())
  .then(data=>{
    console.log(data);
    setMovies(data.results)
  })
}, [])

if (login) {
 return <Register login={login} setLogin={setLogin}/>
} else if (watchList) {
 return <WatchList movieList={movieList} setMovieList={setMovieList} setWatchList={setWatchList}/>
}

return (
  <> 
  <Navbar mode={mode} setMode={setMode} watchList={watchList} setWatchList={setWatchList} login={login} setLogin={setLogin} movies={movies} setMovies={setMovies} query={query} setQuery={setQuery}  />

<div>
    {movies.length > 0 ? (

    //Ana ekran style
    <div className={mode ? "bg-gradient-to-t from-gray-700 to-gray-800 w-[100%] m-[1em auto]" : "bg-[#f5f5f5] w-[100%] m-[1em auto]"}>
      <div className='flex flex-wrap justify-evenly'>
          {movies.map((movieReq)=>
          <MovieBox movieList={movieList} setMovieList={setMovieList} key={movieReq.id} movieReq={movieReq} {...movieReq} />)}
      </div>
    </div>
     //Sonuç bulunamadığında
  ):(
  <h2 className='bg-white text-center mt-40 font-bold'>Not Found!</h2>
)}
</div>

   </>
  );
}

export default App


