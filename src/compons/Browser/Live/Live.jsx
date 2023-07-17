import React from 'react'
import './Live.css'
export const Live = () => {
  return <>
    <div className='live pt-3'>
        <h2 className='text-center text-white mb-5'>How To Start Your <span>Live Stream</span></h2>
        <div className='row'>
            <div className='col col-lg-4 col-md-6 mb-3 col-12'>
                <div className='box'>
                    <div className='icon'>
                        <i className="fa-solid fa-headset"></i>
                    </div>
                    <h5>Go To Your Profile</h5>
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                </div>
            </div>
            <div className='col col-lg-4 col-md-6 mb-3 col-12'>
                <div className='box'>
                    <div className='icon'>
                        <i className="fa-solid fa-gamepad"></i>
                    </div>
                    <h5>Live Stream Button</h5>
                    <p>If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com</p>
                </div>
            </div>
            <div className='col col-lg-4 col-md-6 mb-3 col-12'>
                <div className='box'>
                    <div className='icon'>
                        <i className="fa-solid fa-video"></i>
                    </div>
                    <h5>You Are Live</h5>
                    <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
                </div>
            </div>
        </div>
        <button className='livebtn'>
            Go To Profile
        </button>
    </div>
  </>
}
