import React from 'react'
import  './Most.css'
import m1 from '../../../images/stream-01.jpg'
import m2 from '../../../images/stream-02.jpg'
import m3 from '../../../images/stream-03.jpg'
import m4 from '../../../images/stream-04.jpg'
import m5 from '../../../images/avatar-01.jpg'
import m6 from '../../../images/avatar-02.jpg'
import m7 from '../../../images/avatar-03.jpg'
import m8 from '../../../images/avatar-04.jpg'



export const Most = () => {
return <>
<div className='most pt-3'>
    <h2 className='text-white mb-5'>Most Popular <span>Live Stream</span></h2>
    <div className='row'>
        <div className='col col-lg-3 col-md-6 mb-3 col-12'>
            <div className='box'>
                <div className='image'>
                    <img src={m1} alt=''/>
                    <div className='live'>
                        <span>Live</span>
                        <div className='watch text-center w-100'>
                            <span><i className="fa-solid fa-eye"></i> 1.2K</span>
                            <span><i className="fa-solid fa-gamepad"></i> cs-go</span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-3'>
                        <img src={m5} alt=''/>
                    </div>
                    <div className='col col-9'>
                        <div className='iconline d-flex'>
                            <div className='icon'>
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <span>KenganC</span>
                        </div>
                        <h2>Just Talking With Fans</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='col col-lg-3 col-md-6 mb-3 col-12'>
            <div className='box'>
                <div className='image'>
                    <img src={m2} alt=''/>
                    <div className='live'>
                        <span>Live</span>
                        <div className='watch text-center w-100'>
                            <span><i className="fa-solid fa-eye"></i> 1.2K</span>
                            <span><i className="fa-solid fa-gamepad"></i> cs-go</span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-3'>
                        <img src={m6} alt=''/>
                    </div>
                    <div className='col col-9'>
                        <div className='iconline d-flex'>
                            <div className='icon'>
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <span>KenganC</span>
                        </div>
                        <h2>CS-GO 36 Hours Live Stream</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='col col-lg-3 col-md-6 mb-3 col-12'>
            <div className='box'>
                <div className='image'>
                    <img src={m3} alt=''/>
                    <div className='live'>
                        <span>Live</span>
                        <div className='watch text-center w-100'>
                            <span><i className="fa-solid fa-eye"></i> 1.2K</span>
                            <span><i className="fa-solid fa-gamepad"></i> cs-go</span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-3'>
                        <img src={m7} alt=''/>
                    </div>
                    <div className='col col-9'>
                        <div className='iconline d-flex'>
                            <div className='icon'>
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <span>KenganC</span>
                        </div>
                        <h2>Maybe Nathej Allnight Chillin'</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='col col-lg-3 col-md-6 mb-3 col-12'>
            <div className='box'>
                <div className='image'>
                    <img src={m4} alt=''/>
                    <div className='live'>
                        <span>Live</span>
                        <div className='watch text-center w-100'>
                        <span><i className="fa-solid fa-eye"></i> 1.2K</span>
                        <span><i className="fa-solid fa-gamepad"></i> cs-go</span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-3'>
                        <img src={m8} alt=''/>
                    </div>
                    <div className='col col-9'>
                        <div className='iconline d-flex'>
                            <div className='icon'>
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <span>KenganC</span>
                        </div>
                        <h2>Live Streaming Till Morning</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button className='mostbtn'>
        Discover All Streams
    </button>
</div>
</>
}
