import React, { Component } from 'react'
import './RIghtNow.css'
import r1 from '../../images/popular-01.jpg'
import r2 from '../../images/popular-02.jpg'
import r3 from '../../images/popular-03.jpg'
import r4 from '../../images/popular-04.jpg'
import r5 from '../../images/popular-05.jpg'
import r6 from '../../images/popular-06.jpg'
import r7 from '../../images/popular-07.jpg'
import r8 from '../../images/popular-08.jpg'
import WOW from 'wowjs'


export default class RIghtNow extends Component {
  render() {
    return <>
        <div className='secSection'>
            <h2><span>Most Popular</span><span>Right Now</span></h2>
            <div className='row pt-5 m-0 '>
                <div className='col p-3 p-0 col-6 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r1} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>Fortnite</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span>Sandbox</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
                <div className='col p-3 p-0 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r2} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>pabg</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span> battle s</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
                <div className='col p-3 p-0 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r3} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>doat2</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span> steam-x</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
                <div className='col p-3 p-0 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r4} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>cs-go</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span> Legendary</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
                <div className='col p-3 p-0 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r5} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>Mini Craft</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span> Legendary</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
                <div className='col p-3 p-0 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r6} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>Eagles Fly</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span> Matrix Games</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
                <div className='col p-3 p-0 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r7} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>Warface</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span> Max 3D</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
                <div className='col p-3 p-0 col-lg-3 col-md-4 col-12'>
                    <div className='box px-3 py-4'>
                        <div className="image w-100">
                            <img className='w-100' src={r8} alt=''/>
                        </div>
                        <div className='text mt-4'>
                            <h6 className='mb-2 frist text-white d-flex justify-content-between'><span>Warcraft</span><span><i className="fa-solid fa-star"></i> 4.8</span></h6>
                            <h6 className='m-0 sec text-white d-flex justify-content-between'><span> Legend</span><span><i className="fa-sharp fa-solid fa-download"></i> 2.3</span></h6>
                        </div>                
                    </div>
                </div>
            </div>
            <button>Discover Popular</button>
        </div>
    </>
  }
}
