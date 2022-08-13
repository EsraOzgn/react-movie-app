
import { useState } from 'react';
import {AiFillStar} from 'react-icons/ai'
import {HiPlus} from 'react-icons/hi'



const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieBox =({title, poster_path,vote_average,release_date,overview,movieReq,movieList,setMovieList})=>{
const [show, setShow]=useState(true)

// watclist
function addList(){
  const addFind = movieList.find(item => item.id === movieReq.id);
  if(addFind)
  {
    setMovieList([...movieList.filter(item => item.id !== movieReq.id),{
      id : movieReq.id,
      title: movieReq.title,
      release_date: movieReq.original_title,
      vote_average: movieReq.vote_average,
      poster: movieReq.poster_path,
    }])

  }
  else 
  {
    setMovieList([...movieList,{
      id : movieReq.id,
      title: movieReq.title,
      release_date: movieReq.original_title,
      vote_average: movieReq.vote_average,
      poster: movieReq.poster_path,
    }])
  }
  }


if(show) {
   return(
<>
   {/*Moviecard ön bölüm  */}
  <div className='card-body relative w-[250px]  mb-6 mt-6 rounded-[10px] shadow-lg border shadow-black' >
    <img className=' card-img-top rounded-[10px] cursor-pointer transition duration-500 hover:scale-110' src={API_IMG+poster_path}/>
        <button onClick={addList} className=' absolute bottom-0 left-1 p-2 mb-[4px] ml-[10px] w-10 transition duration-500 hover:scale-125 bg-gradient-to-t from-cyan-300 to-gray-900 shadow-lg border shadow-black rounded-full text-white'><HiPlus size={23}/> </button> 
        <button className='font-serif absolute bottom-0 left-5 p-2 mb-[4px] ml-[45px] w-10 transition duration-500 hover:scale-125 bg-gradient-to-t from-cyan-300 to-gray-900 shadow-lg border shadow-black rounded-full text-white' onClick={()=> setShow(!show)}>İ</button>          
  </div>
</>
   )  
}
  return(  
   // Moviecard arka bölüm 
<div className='card text-center cursor-pointer  bg-gradient-to-t from-cyan-100 to-gray-500 mb-3  w-[250px]  rounded-[10px] shadow-lg border shadow-black '>
   <div className='container'>
      <div >
        <h3 className='font-bold'>{title}</h3>
        <h4 className='font-semibold bg-gradient-to-t from-cyan-200 to-gray-600  flex justify-center'><AiFillStar size={20}/>ImDb: {vote_average}</h4>
        <h5 className='font-semibold'>Release Date: {release_date} </h5>
        <br></br>
        <h6 className='font-semibold' >Overview</h6>
        <p>{overview}</p>
      </div>
      <button type="button" className="inline-block px-6 py-2.5 bg-cyan-800 text-white text-xs leading-tight uppercase rounded shadow-md font-bold duration-300 hover:bg-cyan-700 hover:shadow-lg   transition ease-in-out " onClick={()=> setShow(!show)} > Close </button>
  </div>
</div>
   
   )
}
export default MovieBox;