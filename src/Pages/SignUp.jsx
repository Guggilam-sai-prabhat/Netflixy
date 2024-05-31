import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {

  const [remeberLogin, setRememberLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, signUp } = UserAuth()
  const navigate = useNavigate();

  const handleFormSumbit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <>
      <div>
        <img className='hidden sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Netflix" />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto  bg-black/80 rounded-lg shadow-2xl">
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-nsans-bold'>Sign Up</h1>
              <form onSubmit={handleFormSumbit}
                className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                <button className="p-3 my-2 bg-red-500 text-white rounded w-full font-nsans-bold">Sign Up</button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      className="mr-2"
                      type="checkbox"
                      checked={remeberLogin}
                      onChange={(e) => setRememberLogin(!remeberLogin)} />
                    Remember me
                  </p>
                  <p> Need Help?</p>

                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">Already have an account?</span>
                  <Link to="/login">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp