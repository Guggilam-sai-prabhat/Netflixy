import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchResultHero from './SearchResultHero';

const base_url = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_KEY;

const SearchResults = () => {
  const { searchTerm } = useParams();  // Extracts the query from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      const searchUrl = `${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(searchTerm)}`;
      axios.get(searchUrl)
        .then(res => {
          if (res.data.results.length > 0) {
            setMovie(res.data.results[0]);
          } else {
            setMovie(null);
          }
        })
        .catch(err => {
          console.error('Error fetching search results:', err);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      {movie ? 
        <SearchResultHero movie={movie} /> 
      : 
        <p>No results found for "{searchTerm}".</p>
      }
    </div>
  );
};

export default SearchResults;
