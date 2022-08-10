
import { useState } from 'react';

const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({title, poster_path,vote_average,release_date,overview,id})=>{
const [show, setShow]=useState(true)


 
   
if(show) {
   return(<>
       <div className='card-body w-[250px]  mb-8 mt-6' >
      
            <img  className='card-img-top rounded-[10px]  '  src={API_IMG+poster_path}/>
            
             <h3 className='text-white'>{title}</h3>
       <div className='card-body'>
           
      
<button type="button" className="inline-block  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=> setShow(!show)} > View More </button>

           </div>                                         
       </div>
   </>
   )
   
}

   return(  
          
<div className='card text-center  bg-blue-400 mb-3  w-[250px] rounded-[10px]   '>
   <div className='card-2'>
      <div className='container'>

        <div >
           <h3>{title}</h3>
           <h4>ImDb: {vote_average}</h4>
           <h5>Release Date: {release_date} </h5>
           <br></br>
           <h6>Overview</h6>
           <p>{overview} </p>
        </div>
        
      <button type="button" className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out " onClick={()=> setShow(!show)} > Close </button>

    </div>
  </div>
</div>     

   )
}
export default MovieBox;