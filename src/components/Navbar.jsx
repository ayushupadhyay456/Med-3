import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Admin from './Admin'
const Navbar = () => {
  return (
    <div className='h-20 min-w-full fixed flex text-white bg-newcol'>
        <h1 className='text-4xl items-center mt-4 ml-4 hover:translate-x-2 duration-300 cursor-pointer'>MED-3</h1>
        <ul className='text-xl flex gap-5 justify-end mt-7'>
            <div className='flex justify-end gap-7 ml-60 w-full'>
            <li className='hover:translate-y-2 duration-300 hover:text-white-300 cursor-pointer '>Home</li>
            <li className='hover:translate-y-2 duration-300 hover:text-white-300 cursor-pointer '>About</li>
            <li className='hover:translate-y-2 duration-300 hover:text-white-300 cursor-pointer '>Health</li>
            <li onClick={async ()=>
      {
        if (window.ethereum)
        {
          alert("hello");
            
        }
        else{
          alert("Install Metamask Extension")
        }
      }}
      type="submit" className='hover:translate-y-2 duration-300 hover:text-white-300 cursor-pointer '>Connect Wallet.</li>
            
            </div>
            
        </ul>
    </div>
  )
}

export default Navbar