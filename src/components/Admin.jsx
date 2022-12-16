import React from 'react'
import { useState } from 'react'
import 'flowbite-react'
import { Modal,Button} from 'flowbite-react'
import {HiOutlineExclamationCircle} from 'react-icons/hi'
const Admin = () => {
  return (





    
    

    <div className='min-h-screen flex justify-center w-full'>
      

      



      









      
        <div className='bg-slate-300 flex ml-5 w-80 mt-40 mb-2 rounded-2xl flex-col'><h1 className='ml-4 text-3xl text-center font-extralight leading-none tracking-tight my-4'>Admin Panel</h1>
        <div className='flex flex-col'>




       

          
            <button type="button" data-modal-toggle="authentication-modal" className='border-none rounded-2xl bg-blue-600 text-white h-10 hover:bg-black duration-300 ease-in-out'>Add Doctor</button>

          
        


            <button className='border-none rounded-2xl bg-blue-600 text-white h-10 hover:bg-black duration-300 ease-in-out'>Remove Doctor</button>
            <button className='border-none rounded-2xl bg-blue-600 text-white h-10 hover:bg-black duration-300 ease-in-out'>View List of Patients</button>
            <button className='border-none rounded-2xl bg-blue-600 text-white h-10 hover:bg-black duration-300 ease-in-out'>View Self Details</button>
        </div>
        
        
        </div>
       
        
        


    </div>
  )
}

export default Admin