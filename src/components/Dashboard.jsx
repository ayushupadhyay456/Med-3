import React from 'react'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tiny from '../photos/enc.svg'
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  
  return (
    <>

      <div className="d-content md:w-1/3">

        <div className="d-left">
          <div className='d-left-head'>
            Decentralizing the Health Care.
          </div>
          <div className="d-left-head1">
            We help patients to own and secure their health records.Our team helps to take Doctor's appointment in an easy way.
          </div>
          <div className="bg-blue-600 hover:bg-white px-4 py-4 border-none rounded-sm duration-300 hover:translate-x-4 cursor-pointer text-lg  btn-info">
            Get Started
          </div>
        </div>
        <div className="d-right">
          <img src = {tiny} alt="error"/>
        </div>
      </div>
      <div className="d-services">
        <div className='d-services-head'>Our Services</div>
        <div className="d-boxes">
          <div className="d-box">
            <div className="d-med-box">
              <FontAwesomeIcon className='d-med-box-img' icon={faSuitcaseMedical} />
              <div className="d-med-head">Remain Anonymous</div>
            </div>
            <p>Your Medical Data can't be tracked to your identity</p>

          </div>
          <div className="d-box">
            <div className="d-med-box">
              <FontAwesomeIcon className='d-med-box-img' icon={faTruckMedical} />
              <div className="d-med-head">Decentralized <br></br>Platform</div>
            </div>
            <p>To aid in managing patient reports and provide seamless Interface.</p>
          </div>
          <div className="d-box">
            <div className="d-med-box">
              <FontAwesomeIcon className='d-med-box-img' icon={faFileMedical} />
              <div className="d-med-head">Appointments</div>
            </div>
            <p>Can be taken from doctors in just a click.</p>
          </div>
        </div>


      </div>
      <div className="d-footer bg-black">
        <div className="d-footer-center">
          <h2 className='text-5xl mb-2'>Subscribe to Our Newsletter</h2>
          <form className="w-full max-w-sm my-4" action="https://getform.io/f/ba237957-f8c4-4d85-b552-8fb52cb597c8" method="POST">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="name" id="inline-full-name" type="text" placeholder="John Doe"/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">
        E-Mail
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" name="email" type="email" placeholder="abc@xyxmail.com"/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input className="mr-2 leading-tight" name="checkbox" type="checkbox"/>
      <span className="text-sm">
        Send me your newsletter!
      </span>
    </label>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </div>
  </div>
</form>
        </div>

      </div>
    <div className="d-footer-under bg-black">
      <ul className='d-footer-under-ul pb-6'>
        <li className='d-footer-under-li'><FontAwesomeIcon className='mr-3' icon={faAddressBook}/>Contact Us.</li>
        <li className='d-footer-under-li'><FontAwesomeIcon className='mr-3' icon={faPeopleGroup}/>About.Us</li>
        <li className='d-footer-under-li'><FontAwesomeIcon className='mr-3' icon={faDesktop}/>Services</li>
        <li className='d-footer-under-li'>Terms of Use</li>
      </ul>
    </div>
    </>
  )
}

export default Dashboard