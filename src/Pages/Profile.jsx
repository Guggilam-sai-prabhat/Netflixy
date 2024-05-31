import React , {useEffect, useState}from 'react'
import {MdChevronLeft , MdChevronRight} from "react-icons/md"
import {AiOutlineClose} from "react-icons/ai"
import {UserAuth} from "../context/AuthContext";
import {Link} from "react-router-dom";
import { db } from '../services/Firebase';
import { doc,  updateDoc , arrayRemove , onSnapshot} from 'firebase/firestore';
import { createImageUrl } from '../services/movieService';

const Profile = () => {

const [movies, setMovies] = useState([]);
const {user} = UserAuth();
useEffect(() => {
  if (user?.email) {
    const userDoc = doc(db, 'users', user.email);
    onSnapshot(userDoc, (doc) => {
      if (doc.exists()) {
        setMovies(doc.data().favShows)
      }
    });
  }
} , [user?.email]);

const sliden = (offset) =>{
  const slider = document.getElementById('slider');
    slider.scrollLeft += offset;
}
const handleLikeShow =  async (movie) => {
  const userDoc = doc(db, 'users', user.email);

  await updateDoc(userDoc , {
    favShows: arrayRemove(movie)  
  });

}


// console.log(movies)

  return (
    <>
    <div>
      <div>
         <img className='block w-full h-[500px] object-cover'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
         alt = "/"/>
         <div className = 'bg-black/70 fixed top-0 left-0 w-full h-[550px]'/>
         <div className='absolute top-[20%] p-4 md:p-8 '>
          <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>Profile</h1>
          <p className='font-sans-light text-gray-500 text-lg'>{user?.email}</p>
         </div> 
      </div>
    </div>

    <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>My Fav Shows</h2>
        <div className='relative flex items-center group'>
        <MdChevronLeft onClick={()=>sliden(-500)}
        className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer ' size={40} />
        <div id = {`slider`} 
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        
        {movies.map((movie, index) => (
          <div key = {movie.id}
          className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg cursor-pointer m-2 overflow-hidden'>
      <img
        className='w-full h-40 block object-cover object-top'
        src={createImageUrl(movie.backdrop_path ?? movie.poster_path, "w500")}
        alt={movie.title} />

      <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 text-center'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-sans-bold'>
          {movie.title}
        </p>

          <p>
            <AiOutlineClose
            onClick={() => handleLikeShow(movie)}
             size={30} className='absolute top-2 right-2'/>
          </p>

      </div>
    </div>
            ))}

        </div>
        <MdChevronRight onClick={()=>sliden(500)}
        className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={40} />

        </div>
    </>
  )
}

export default Profile