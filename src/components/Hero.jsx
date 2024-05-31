import axios from 'axios'
import React, { useState, useEffect } from 'react'
import endpoints, { createImageUrl } from '../services/movieService'
// import  from '../services/movieService.jsx'


const Hero = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get(endpoints.popular).then(res => {
      const movie = res.data.results
      const randomMovie = movie[Math.floor(Math.random() * movie.length)]
      setMovie(randomMovie)
    })
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  if (!movie) return (<div>
    <p>Loading...
    </p>
  </div>);

  const { title, backdrop_path, release_date, overview } = movie

  return (
    <div className='w-full h-[550px] lg:h-[850px]' >
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black' />
        <img className='w-full h-full object-cover object-top'
          src={createImageUrl(backdrop_path, "original")} alt={title} />

        <div className='absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-6xl font-nsans-bold'>{title}</h1>
          <div className='mt-8 mb-4'>
            <button className='capitalize border bg-gray-300 py-2 px-5 text-black'>play</button>
            <button className='capitalize border border-gray-300 py-2 px-5 ml-4'>Watch later</button>
          </div>
          <p className='text-gray-400'>{release_date}</p>
          <p className='w-full md:max-w-[70]% lg:max-w-[50%] xl:max-w-[35%]'>{truncate(overview, 165)}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;