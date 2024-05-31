import React from 'react';
import { createImageUrl } from '../services/movieService';

const SearchResultHero = ({ movie }) => {
  if (!movie) return <div>Loading...</div>;

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className='w-full h-[550px] lg:h-[850px]'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black' />
        <img className='w-full h-full object-cover object-top'
          src={createImageUrl(backdrop_path, "original")} alt={title} />

        <div className='absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-6xl font-bold'>{title}</h1>
          {/* Removed buttons for cleaner design specific to search results */}
          <p className='text-gray-400'>{release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncate(overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultHero;
