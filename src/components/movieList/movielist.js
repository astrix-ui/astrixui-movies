import React, { useEffect, useState } from 'react'
import './movielist.css'
import { useParams } from 'react-router-dom'
import Card from '../card/card'


const MovieList = () => {
    const [movieList, setmovieList] = useState([])
    const {type} = useParams()
    const apiKey = "16143e1751de0db3e5f153f91286fbc9";

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        getData()
    }, [type])

    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
        .then(data => setmovieList(data.results))
    }

    return(
        <div className='movie_list'>

            <h2 className='list_title'>
                {(type ? type : "POPULAR").toUpperCase()}
            </h2>

            <div className='list_cards'>
                {
                    movieList.map(movie =>(
                        <Card movie = {movie}/>
                    ))
                }
            </div>
        </div>
    )

}

export default MovieList;