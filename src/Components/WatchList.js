import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const API_IMG="https://image.tmdb.org/t/p/w500/";
const WatchList = ({setWatchList,movieList,setMovieList}) => {
const removeDelete = (id) => [
    setMovieList([...movieList.filter(item => item.id !== id)])
    ]

  return (

    //WatchList sayfasına eklenenler
    <div className='mx-auto flex min-h-screen w-[100%] items-center justify-center border-4 rounded-lg bg-gradient-to-b from-sky-300 to-gray-600 text-white'>
      <div className='absolute top-2 right-2 h-10 w-10' onClick={()=> setWatchList(false)}> <AiOutlineCloseCircle size={35}/> </div>
        <div className='flex flex-wrap gap-8 w-full justify-center'> 
              {movieList?.map((item)=>(
            <div key={item.id}>
                 <img className='card-img-top  rounded-[10px] cursor-pointer card-body relative w-[250px]  mb-8 mt-6 shadow-lg border shadow-black ' src={`${API_IMG}${item.poster}`}/>
                 <h3 className='text-black text-center' >{item.title}</h3> 
                    <div className='w-full flex justify-center'>
                         <button className='flex justify-center transform rounded-sm bg-red-500 py-2 m-[5%] w-[150px] font-bold duration-300 hover:bg-red-200' onClick={()=> removeDelete(item.id)}><RiDeleteBin5Line size={23}/>Delete</button>
                    </div>
            </div>
 ))}
        </div>
    </div>
  )
}

export default WatchList