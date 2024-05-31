import React , {useState}from 'react'
import { createImageUrl } from '../services/movieService';
import {FaHeart , FaRegHeart} from'react-icons/fa'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';
import { db } from '../services/Firebase';
import { UserAuth } from '../context/AuthContext';


const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const { title, backdrop_path, poster_path } = movie;

  const markFavShow = async () => {
    try {
      const userEmail = user?.email;
      if (userEmail) {
        const userDoc = doc(db, 'users', userEmail);
        setLike(!like);
        await updateDoc(userDoc, {
          favShows: arrayUnion({ ...movie })
        });
      } else {
        alert('Please login to add to favorites');
      }
    } catch (error) {
      console.error("Error adding favorite: ", error);
    }
  };

  return (
    <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg cursor-pointer m-2 overflow-hidden'>
      <img
        className='w-full h-40 block object-cover object-top'
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title} />

      <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 text-center'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-sans-bold'>
          {title}
        </p>
        <span onClick={markFavShow} className='cursor-pointer absolute top-2 left-2'>
          {like ? <FaHeart className='text-gray-300' size={20} /> : <FaRegHeart className='text-gray-300' size={20} />}
        </span>
      </div>
    </div>
  );
};

export default MovieItem;
