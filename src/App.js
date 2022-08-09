import React, { useState, useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox'
import Navbar from './Components/Navbar'
import Register from './Components/Register';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=235aacbb714045d19f54d689f8caa5b2";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=235aacbb714045d19f54d689f8caa5b2&query"

function App() {

const [movies, setMovies]=useState([]);
const [query, setQuery]=useState('')
const [login,setLogin] = useState(false)

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
}



return (
  <> 

  <Navbar login={login} setLogin={setLogin} movies={movies} setMovies={setMovies} query={query} setQuery={setQuery}  />

<div>
              {movies.length > 0 ? (

    <div className='bg-gray-700 w-[100%] m-[1em auto] '>
      <div className='flex flex-wrap justify-evenly'>

          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq} />)}

      </div>
    </div>
):(
  <h2 className='bg-white'>Not Found!</h2>
)}
</div>

    </>
  );
}

export default App