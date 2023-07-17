import React from 'react'
import './Bhead.css'
import d1 from '../../../images/game-01.jpg'
import d2 from '../../../images/game-02.jpg'
import d3 from '../../../images/game-03.jpg'
import c1 from '../../../images/clip-01.jpg'
import c2 from '../../../images/clip-02.jpg'
import c3 from '../../../images/clip-03.jpg'
import c4 from '../../../images/clip-04.jpg'
import Slider from 'react-slick'


export const Bhead = () => {
    const settings = {
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return <>
    <div className='Bhead'>
        <div div className='row'>
            <div className='col px-3 col-lg-8 col-md-12 mb-5'>
                <div className='box p-3 dark'>
                    <h2>Featured <span>Games</span></h2>
                    <div className='row'>
                        <Slider {...settings}>
                            <div className='col col-lg-4 col-md-6'>
                            <div className='box px-2'>
                                <div className='image' style={{height:"350px"}}>
                                    <img className='w-100 h-100' src={c1} alt=''/>
                                </div>
                                <p className='d-flex justify-content-between up'>gamezer <span><i className="fa-solid fa-star"></i> 4.9</span></p>
                                <p className='d-flex justify-content-between down'>249K Downloads <span><i className="fa-solid fa-download"></i> 2.3M</span></p>
                            </div>
                            </div>
                            <div className='col col-lg-4 col-md-6'>
                                <div className='box px-2'>
                                    <div className='image' style={{height:"350px"}}>
                                        <img className='w-100 h-100' src={c2} alt=''/>
                                    </div>
                                    <p className='d-flex justify-content-between up'>gamezer <span><i className="fa-solid fa-star"></i> 4.9</span></p>
                                    <p className='d-flex justify-content-between down'>249K Downloads <span><i className="fa-solid fa-download"></i> 2.3M</span></p>
                                </div>
                            </div>
                            <div className='col col-lg-4 col-md-6'>
                                <div className='box px-2'>
                                    <div className='image' style={{height:"350px"}}>
                                        <img className='w-100 h-100' src={c3} alt=''/>
                                    </div>
                                    <p className='d-flex justify-content-between up'>gamezer <span><i className="fa-solid fa-star"></i> 4.9</span></p>
                                    <p className='d-flex justify-content-between down'>249K Downloads <span><i className="fa-solid fa-download"></i> 2.3M</span></p>
                                </div>
                            </div>

                            <div className='col col-lg-4 col-md-6'>
                                <div className='box px-2'>
                                    <div className='image' style={{height:"350px"}}>
                                        <img className='w-100 h-100' src={c4} alt=''/>
                                    </div>
                                    <p className='d-flex justify-content-between up'>gamezer <span><i className="fa-solid fa-star"></i> 4.9</span></p>
                                    <p className='d-flex justify-content-between down'>249K Downloads <span><i className="fa-solid fa-download"></i> 2.3M</span></p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='col px-3 col-lg-4 col-md-12'>
                <div className='box p-4 dark'>
                    <h2>Top <span>Downloaded</span></h2>
                    <div className='download'>
                    <ul className='d-flex text-white p-0 w-100 pb-4'>
                        <li className='me-3'><img src={d1} alt=''/></li>
                        <li>
                            <h6>Fortnite</h6>
                            <p>Sandbox</p>
                            <div className='data d-flex'>
                                <h6 className='me-3'><span><i className="fa-solid fa-star start"></i></span> 4.9</h6>
                                <h6><span><i className="fa-solid fa-download download"></i></span> 2.2M</h6>
                            </div>
                        </li>
                        <li className='ms-auto mt-auto'>
                            <div className='icon'>
                                <i className="fa-solid fa-download download"></i>
                            </div>
                        </li>
                    </ul>
                    <ul className='d-flex text-white p-0 w-100 pb-4'>
                        <li className='me-3'><img src={d2} alt=''/></li>
                        <li>
                            <h6>Fortnite</h6>
                            <p>Sandbox</p>
                            <div className='data d-flex'>
                                <h6 className='me-3'><span><i className="fa-solid fa-star start"></i></span> 4.9</h6>
                                <h6><span><i className="fa-solid fa-download download"></i></span> 2.2M</h6>
                            </div>
                        </li>
                        <li className='ms-auto mt-auto'>
                            <div className='icon'>
                                <i className="fa-solid fa-download download"></i>
                            </div>
                        </li>
                    </ul>
                    <ul className='d-flex text-white p-0 w-100 pb-4'>
                        <li className='me-3'><img src={d3} alt=''/></li>
                        <li>
                            <h6>Fortnite</h6>
                            <p>Sandbox</p>
                            <div className='data d-flex'>
                                <h6 className='me-3'><span><i className="fa-solid fa-star star"></i></span> 4.9</h6>
                                <h6><span><i className="fa-solid fa-download download"></i></span> 2.2M</h6>
                            </div>
                        </li>
                        <li className='ms-auto mt-auto'>
                            <div className='icon'>
                                <i className="fa-solid fa-download download"></i>
                            </div>
                        </li>
                    </ul>
                    <h6 className='view'>View All Games</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
