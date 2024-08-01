import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movielist';


const Home = () =>{
    const apiKey = "16143e1751de0db3e5f153f91286fbc9";

    const [popularMovies, setPopularMovies] = useState([])

   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))

   }, [])
    return(
        <>
        <div className='poster'>
            <Carousel 
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >

            {
                popularMovies.map(movie => (
                    <Link style={{textDecoration: "none", color:"white"}} to = {`movie/${movie.id}`}>
                        <div className='posterImage'>
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>
                        <div className='posterImage_Overlay'>
                            <div className='posterImage_Title'>
                                {
                                    movie ? movie.original_title : ""
                                }
                            </div>
                            <div className='posterImage_Runtime'>
                                {
                                    movie ? movie.release_date : ""
                                }
                                <span className='posterImage_Rating'>
                                    {
                                        movie ? movie.vote_average : ""
                                    }
                                    <i className='fas fa-star' />{" "}
                                </span>
                            </div>
                            <div className='PosterImage_Description'>
                                {
                                    movie ? movie.overview : ""
                                }
                            </div>
                        </div>
                    </Link>
                ))
            }

            </Carousel>

            <MovieList />
        </div>
        </>
    )
}

export default Home;