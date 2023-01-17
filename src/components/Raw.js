import React from 'react'
import instance from '../instance'
import { useEffect,useState } from 'react'
import './Raw.css';

function Raw({title,fetchUrl,isLargeRow}) {

    const [movies,setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";


    async function fetchMovies(){
        const request = await instance.get(fetchUrl)
        // console.log(request.data.results);
        setMovies(request.data.results);
    }

    // console.log(movies);

    useEffect(()=>{
        fetchMovies()
    },[])
    
  return (
    <div className='row'>
        <h3>{title}</h3>
        <div className='movies_row'>
            {
                movies.map((movie)=>(
                    <img className={`movie_poster ${isLargeRow && "movies_poster_large"}`}
                     src={`${base_url}${isLargeRow?movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
                ))
            }
        </div>
    </div>
  )
}

export default Raw