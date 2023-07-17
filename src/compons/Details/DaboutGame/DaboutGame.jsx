import React from 'react'
import './DaboutGame.css'
import da1 from '../../../images/details-01.jpg'
import da2 from '../../../images/details-02.jpg'
import da3 from '../../../images/details-03.jpg'

export const DaboutGame = () => {
    return <>
        <div className='aboutgame p-5'>
            <div className='row'>
                <div className='col fcol col-lg-6 col-12 mb-3'>
                    <div className="box p-4">
                        <div className='name d-flex w-100 align-items-center justify-content-between'>
                            <h6 className='text-white'>Fortnite</h6>
                            <div className='icon'>
                                <span className='text-white'><i className="fa-solid fa-star star me-1"></i> 4.8</span>
                            </div>
                        </div>
                        <div className='title d-flex w-100 align-items-center justify-content-between'>
                            <h6 className='titleP'>Sandbox</h6>
                            <div className='icon'>
                                <span className='text-white'><i className="fa-solid fa-download me-1"></i> 2.3M</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col fcol col-lg-6 col-12'>
                    <div className='box p-4 d-flex px-5 align-items-center justify-content-around'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <i className="fa-solid fa-star star"></i>
                            <span className="text-white mt-1 fw-bold">4.8</span>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <i className="fa-solid fa-download me-1"></i>
                            <span className="text-white mt-1 fw-bold">2.3M</span>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <i className="fa-solid fa-download me-1"></i>
                            <span className="text-white mt-1 fw-bold">36GB</span>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <i className="fa-solid fa-download me-1"></i>
                            <span className="text-white mt-1 fw-bold">Action</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className="col mt-3 col-lg-4 col-12">
                    <div className='box h-100'>
                        <div className='image h-100'>
                            <img className='w-100' src={da1} alt='' />
                        </div>
                    </div>
                </div>
                <div className="col mt-3 col-lg-4 col-12">
                    <div className='box h-100'>
                        <div className='image h-100'>
                            <img className='w-100' src={da2} alt='' />
                        </div>
                    </div>
                </div>
                <div className="col mt-3 col-lg-4 col-12">
                    <div className='box h-100'>
                        <div className='image h-100'>
                            <img className='w-100' src={da3} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <p className='mt-4'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <span>small contribution via PayPal</span> to info at templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
            <button className='text-center w-100 py-2 rounded-pill'>Download Fortnite Now !</button>
        </div>
    </>
}
