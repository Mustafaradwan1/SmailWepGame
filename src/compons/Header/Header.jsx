import React, { Component } from 'react'
import './Header.css'
import bg from '../../images/banner-bg.jpg'
import RIghtNow from '../RIghtNow/RIghtNow'
import Librarys from '../Librarys/Librarys'


export default class Header extends Component {
  render() {
    return <>
        <header>
            <div className='container mt-5 p-5'>
                <div className='fsection position-relative mb-5'>
                    <img className='w-100' src={bg} alt=''/>
                    <div className='box w-100 top-0 p-5 position-absolute'>
                        <h5 className='text-white mb-3'>Welcome To Cyborg</h5>
                        <h1 className='text-white w-50 mb-4'><span>BROWSE</span> OUR POPULAR GAMES HERE</h1>
                        <button className='btns rounded-pill'>Browse Now</button>
                    </div>
                </div>
                <RIghtNow/>
                <Librarys/>
            </div>
        </header>
    </>
  }
}
