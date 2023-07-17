import React from 'react'
import './Ddata.css'
import d1 from '../../../images/feature-left.jpg'
import d2 from '../../../images//feature-right.jpg'

export const Ddata = () => {
    return <>
        <div className='row'>
            <div className='col col-lg-4 col-12 mb-3 '>
                <img className='w-100' src={d1} alt='' />
                </div>
                <div className='col col-lg-8  col-12 position-relative'>
                <a className='position-relative' href='https://youtu.be/r1b03uKWk_M' target='_blank'><i className="fa-solid fa-play"></i></a>
                <img className='w-100 position-absolute top-0' src={d2} alt='' />
            </div>
        </div>
        <h2 className='text-center text-white my-5 fw-bold'>FORTNITE DETAILS</h2>
    </>
}
