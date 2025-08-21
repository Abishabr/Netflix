import React, { useEffect, useState } from 'react'
import './Home.css'
import requests from '../../utils/requests'
import NavBar from '../../components/NavBar/NavBar'

const Home = ({fetchUrl}) => {

  const [movie,setMovie] = useState([])

  useEffect(() => {
    fetch(fetchUrl)
    .then((response)=> response.json())
    .then((data)=> {
      // console.log(data);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const selectedMovie = data.results[randomIndex];
      console.log(selectedMovie);
      setMovie(selectedMovie);
    })
    .catch((error)=> {
      console.log(error)
    })
  },[fetchUrl])

  return (
    <div className='home'>
      <NavBar />

      <div className='banner'>
        <img className='banner__image' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt="" />
        <div className='banner__contents'>
          <h1 className='banner__title'>{movie?.title || movie?.name || "Banner"}</h1>
          <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
          </div>
          <h1 className='banner__description'>{movie?.overview?.length > 150 ? `${movie.overview.substring(0, 150)}...` : movie?.overview}</h1>
          <div className='banner--fadeBottom'></div>
        </div>

      </div>
     

    </div>
  )
}

export default Home