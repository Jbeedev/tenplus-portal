import {React, useState, useRef, useEffect} from 'react';
import './Test.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Images/logo_2.png';
import img2 from '../assets/Images/TenPlus-JobSkill-Acqusition.png';

const Test = () => {
    const [ timerDays, setTimerDays ] = useState('00');
    const [ timerHours, setTimerHours ] = useState('00');
    const [ timerMinutes, setTimerMinutes ] = useState('00');
    const [ timerSeconds, setTimerSeconds ] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Dec 30, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0) {
                //clear interval
                clearInterval(interval.current);
            }else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    }

    useEffect( () => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })


    return (
        <div className='caro mt-5 p-5'>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque praesentium provident officiis illum quis, at ratione ipsam obcaecati nihil necessitatibus voluptas corrupti accusamus eos culpa, velit temporibus ducimus mollitia dicta.</h1>
            <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <div class="owl-carousel upcoming-slider">
                                {/* <!-- slider item --> */}
                                <div class="upcoming-slider-item">
                                    <img src="https://portal.tenpluslabs.com/storage/programme-photos/TenPlus-JobSkill-Acqusition.png" width="95px" height="95px"
                                         class="center-block img-circle"
                                         alt="2022 Skill Acquisition Program 1.0" />
                                    <h3 class="program-name">2022 Skill Acquisition Program 1.0</h3>
                                    <p class="prog-details">A programme designed to boost your digital skills</p>
                                    <div class="row">
                                        <div class="col-lg-6  col-md-12 mt-2"><a href="2022-skill-acquisition-program-1"
                                                                                 class="btn home-btn">View</a></div>
                                        <div class="col-lg-6 col-md-12 mt-2">
                                            <a href="2022-skill-acquisition-program-1/application/personal-info" class="btn home-btn-reg second-reg">Register</a>
                                            <a class="btn countdown-btn1 registerCount2" data-start-date="2021-12-20 00:00:00"></a>
                                        </div>
                                    </div>
                                    <span class="light-bg program-rating" data-rating="5">
                                            5
                                            <i class="las la-star"></i>
                                        </span>
                                </div>
                                <div class="upcoming-slider-item">
                                    <img src="https://portal.tenpluslabs.com/storage/programme-photos/logo_2.png" width="95px" height="95px"
                                         class="center-block img-circle"
                                         alt="TenPlus Digital Labs Skills Contest 1.0" />
                                    <h3 class="program-name">TenPlus Digital Labs Skills Contest 1.0</h3>
                                    <p class="prog-details">Join this contest to showcase your skill and win amazing cash prizes</p>
                                    <div class="row">
                                        <div class="col-lg-6  col-md-12 mt-2"><a href="tenplus-digital-labs-skills-contest-1"
                                                                                 class="btn home-btn">View</a></div>
                                        <div class="col-lg-6 col-md-12 mt-2">
                                            <a href="tenplus-digital-labs-skills-contest-1/application/personal-info" class="btn home-btn-reg second-reg">Register</a>
                                            <a class="btn countdown-btn1 registerCount2" data-start-date="2022-07-09 00:00:00"></a>
                                        </div>
                                    </div>
                                    <span class="light-bg program-rating" data-rating="5">
                                            5
                                            <i class="las la-star"></i>
                                        </span>
                                </div>
                                <div className='d-flex justify-content-end bd-highlight'>
                                    <p>Starts:</p>
                                    <p>{timerDays}d - </p>
                                    <p>{timerHours}h - </p>
                                    <p>{timerMinutes}m - </p>
                                    <p>{timerSeconds}s </p>
                                </div>

                                                                {/* <!-- /slider item --> */}
                            </div>
                            {/* <!-- /End upcoming-slider --> */}
                            
                                  {/* <!-- side thumbnail --> */}
                        
                            <div class="upcoming-slider-thumb hidden-xs">
                                    <div class="thumb-prev">                              
                                        <span>
                                            <img src={ img1 } width="98px" height="98px"
                                                 alt="program upcoming" />
                                        </span>
                                        <span class="light-bg program-rating">
                                            5
                                            <i class="las la-star"></i>
                                        </span>
                                    </div>
                                    <div class="thumb-next">
                                        <span>
                                            <img src={ img2 } width="98px"
                                                 height="98px" alt="program upcoming" />
                                        </span>
                                        <span class="light-bg program-rating">
                                            5
                                            <i class="las la-star"></i>
                                        </span>
                                    </div>
                            </div>
                        



                                  {/* <!-- /side thumbnail --> */}
                        
                        </div>
                        {/* <!-- /End col --> */}
                    </div>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 bg-caro'>
                        <Carousel className='mt-5 p-5'>
                                    <Carousel.Item className=' text-center'>
                                    <img src={ img1 } width="50px" height="50px"
                                         class="center-block img-circle"
                                         alt="TenPlus Digital Labs Skills Contest 1.0" />
                                        <h3 class="">TenPlus Digital Labs Skills Contest 1.0</h3>
                                        <p class="prog-details">Join this contest to showcase your skill and win amazing cash prizes</p>
                                        <div class="row">
                                            <div class="col-lg-6  col-md-12 mt-2"><a href="tenplus-digital-labs-skills-contest-1"
                                                                                    class="btn home-btn">View</a></div>
                                            <div class="col-lg-6 col-md-12 mt-2">
                                                <a href="tenplus-digital-labs-skills-contest-1/application/personal-info" class="btn home-btn-reg second-reg">Register</a>
                                                <a class="btn countdown-btn1 registerCount2" data-start-date="2022-07-09 00:00:00"></a>
                                            </div>
                                        </div>
                                    <Carousel.Caption className='text-center'>
                                        {/* <h1 className='text-white'>Hello World First slide label slide show</h1>
                                        <p className='text-white'>First slide label</p> */}
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item className=' text-center'>
                                    <img src={ img2 } width="50px" height="50px"
                                         class="center-block img-circle"
                                         alt="TenPlus Digital Labs Skills Contest 1.0" />
                                        <h3 class="">TenPlus Digital Labs Skills Contest 1.0</h3>
                                        <p class="prog-details">Join this contest to showcase your skill and win amazing cash prizes</p>
                                        <div class="row">
                                            <div class="col-lg-6  col-md-12 mt-2">
                                                <a href="tenplus-digital-labs-skills-contest-1"
                                                   class="btn home-btn">View
                                                </a>
                                            </div>
                                            <div class="col-lg-6 col-md-12 mt-2">
                                                <a href="tenplus-digital-labs-skills-contest-1/application/personal-info" class="btn home-btn-reg second-reg">Register</a>
                                                <a class="btn countdown-btn1 registerCount2" data-start-date="2022-07-09 00:00:00"></a>
                                            </div>
                                        </div>
                                    <Carousel.Caption className='text-center'>
                                        {/* <h1 className='text-white'>Hello World First slide label slide show</h1>
                                        <p className='text-white'>First slide label</p> */}
                                    </Carousel.Caption>
                                    </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                    
        </div>
    )
}

export default Test
