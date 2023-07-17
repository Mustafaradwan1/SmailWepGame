import React, { Component } from 'react'
import './Librarys.css'
import l1 from  '../../images/game-01.jpg'
import l2 from  '../../images/game-02.jpg'
import l3 from  '../../images/game-03.jpg'

export default class Librarys extends Component {
  render() {
    return <>
    <div className='thrSection'>
        <h2><span>Most Popular</span><span>Right Now</span></h2>
        <ul className='d-flex justify-content-between align-items-center mt-5 text-center'>
            <li className='d-block'><img className='gameimg' src={l1} alt=''/></li>
            <li>
                <h6 className='text-white '>Dota 2</h6>
                <span>Sandbox</span>
            </li>
            <li>
                <h6 className='text-white '>Date Added</h6>
                <span>24/08/2036</span>
            </li>
            <li>
                <h6 className='text-white '>Hours Played</h6>
                <span>634 H 22 Mins</span>
            </li>
            <li>
                <h6 className='text-white '>Currently</h6>
                <span>Downloaded</span>
            </li>
            <li>
                <button>Download</button>
            </li>
        </ul>
        <ul className='d-flex justify-content-between align-items-center mt-5 text-center'>
            <li><img className='gameimg' src={l2} alt=''/></li>
            <li>
                <h6 className='text-white '>Dota 2</h6>
                <span>Sandbox</span>
            </li>
            <li>
                <h6 className='text-white '>Date Added</h6>
                <span>24/08/2036</span>
            </li>
            <li>
                <h6 className='text-white '>Hours Played</h6>
                <span>634 H 22 Mins</span>
            </li>
            <li>
                <h6 className='text-white '>Currently</h6>
                <span>Downloaded</span>
            </li>
            <li>
                <button className='active'>Download</button>
            </li>
        </ul>
        <ul className='d-flex justify-content-between align-items-center mt-5 text-center'>
            <li><img className='gameimg' src={l3} alt=''/></li>
            <li>
                <h6 className='text-white '>Dota 2</h6>
                <span>Sandbox</span>
            </li>
            <li>
                <h6 className='text-white '>Date Added</h6>
                <span>24/08/2036</span>
            </li>
            <li>
                <h6 className='text-white '>Hours Played</h6>
                <span>634 H 22 Mins</span>
            </li>
            <li>
                <h6 className='text-white '>Currently</h6>
                <span>Downloaded</span>
            </li>
            <li>
                <button>Download</button>
            </li>
        </ul>
        <button className='btn'>Discover Popular</button>
</div>
    </>
  }
}
