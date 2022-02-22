import { useState, useEffect, useRef } from 'react';
import './Index.css';
import HomeImg from './HomeImg';
import img2 from '../assets/Images/TenPlus-JobSkill-Acqusition.png';
import img1 from '../assets/Images/logo_2.png';
import Carousel from 'react-bootstrap/Carousel';

const Index = () => {

  
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
        <div className="">
            <div className="page-wrapper container-fluid">
                <div className="container-fluid">
                {/* <!-- ============================================================== -->
                <!-- Static Slider 10  -->
                <!-- ============================================================== --> */}
                <HomeImg />
                <div class="container">
                    {/* <!-- Row --> */}
                    <div class="row">
                        <div class="col-12 my-sm-5  text-center">
                            <h1 class="m-b-0 welcome-reg mt-4">Welcome To TenPlus Digital Labs Portal</h1>
                            <p class="text-muted m-t-0 font-12 mt-2">Get started by selecting a program you wish to join</p>
                            <hr class="mystyle" />
                        </div>
                        <div class="col-md-6">
                            <div class="card card-outline-inverse">
                                <div class="card-header">
                                    <h4 class="m-b-0 text-white h4-hello">Hello! Are You New Here?</h4>
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">About Portal</h3>
                                    <p class="card-text about-portal">Available on this portal are scholarship programs that
                                                                    you can
                                                                    apply for depending on your needs.</p>
                                    <h3 class="card-title">Our Programs</h3>
                                    <p class="card-text about-portal">To the right are a list of programs. Click on any to
                                                                    get more
                                                                    information and possibly <strong>apply.</strong></p>
                                                                        <h3 class="card-title">Create An Account</h3>
                                        <p class="card-text about-portal"><strong>NOTE:</strong> To apply, you will be required
                                                                                                to create a
                                            <strong> FREE</strong> account.</p>
                                        <a href="register" class="btn btn-inverse">Create Account</a> 
                                        <a href="login" class="btn btn-inverse">Login</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card card-outline-success">
                                <div class="card-header">
                                    <h4 class="m-b-0 text-white h4-hello">Active Programs</h4>
                                </div>
                                                            <div class="card-body">
                                    <h3 class="card-title text-danger">No Active Programme</h3>
                                    <div class="card-text">
                                        <div class="row">
                                            <div class="col-2">
                                                <img src={img2}
                                                     height="26.38333"
                                                     width="58.333"
                                                     alt="web development company | TenPlus Digital Labs" 
                                                />
                                            </div>
                                            <div class="col-10"><p class="prog-details">Check back later</p></div>
                                        </div>
                                    </div>
                                    
                                </div>
                                                            <br />
                            
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Row --> */}
                </div>
            </div>
            </div>

            <section>
            <div class="upcoming-programs">
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col-12">
                            <div>
                                <h2 class="section-title">Upcoming Programs</h2>
                            </div>
                        </div>
                        {/* <!-- /End col --> */}
                    </div>
                    {/* <!-- /End row --> */}
                    
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            
                            <div class="">
                                {/* <!-- slider item --> */}
                                <br />
                                


                                
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


                        <div className='row'>
                        <div className='col-md- offset-md-'>
                        <Carousel className='p-5'>
                            <Carousel.Item className=''>
                                <div class="upcoming-slider-item">
                                <div class="">
                                <img src={img2} width="95px" height="95px"
                                        class="center-block img-circle"
                                        alt="2022 Skill Acquisition Program 1.0" />
                                <h3 class="program-name">2022 Skill Acquisition Program 1.0</h3>
                                <p class="prog-details">A programme designed to boost your digital skills</p>
                                <div class="row">
                                    <div class="col-lg-6  col-md-12 mt-2">
                                        <a class="btn home-btn text-center">View</a>                                
                                    </div>
                                    <div class="col-lg-6 col-md-12 mt-2">
                                        {/* <a href="2022-skill-acquisition-program-1/application/personal-info" class="btn home-btn-reg second-reg">Register</a> */}
                                        {/* <a class="btn countdown-btn1 registerCount2" data-start-date="2021-12-20 00:00:00"></a> */}
                                    </div>
                                </div>
                                <span class="light-bg program-rating" data-rating="5">
                                        5
                                        <i class="las la-star"></i>
                                    </span>
                                </div>
                                </div>
                            <Carousel.Caption className=''>
                                        {/* <h1 className='text-white'>Hello World First slide label slide show</h1>
                                        <p className='text-white'>First slide label</p> */}
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className=''>
                                <div class="upcoming-slider-item">
                                    
                                         <img src={img1} width="95px" height="95px"
                                         class="center-block img-circle"
                                         alt="TenPlus Digital Labs Skills Contest 1.0" />
                                    <h3 class="program-name">TenPlus Digital Labs Skills Contest 1.0</h3>
                                    <p class="prog-details">Join this contest to showcase your skill and win amazing cash prizes</p>
                                    <div class="row">
                                        <div class="col-lg-6  col-md-12 mt-2"><a href="tenplus-digital-labs-skills-contest-1"
                                                                                 class="btn home-btn">View</a></div>
                                        <div class="col-lg-6 col-md-12 mt-2">
                                            {/* <a href="tenplus-digital-labs-skills-contest-1/application/personal-info" class="btn home-btn-reg second-reg">Register</a> */}
                                            <a class="btn countdown-btn1 registerCount2" data-start-date="2021-12-20 00:00:00">{timerDays}d : {timerHours}h : {timerMinutes}s : {timerSeconds}m</a>
                                        </div>
                                    </div>
                                    <span class="light-bg program-rating" data-rating="5">
                                            5
                                            <i class="fa fa-star"></i>
                                    </span>
                                </div>
                            <Carousel.Caption className='text-center'>
                                        {/* <h1 className='text-white'>Hello World First slide label slide show</h1>
                                        <p className='text-white'>First slide label</p> */}
                                    </Carousel.Caption>
                                    </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                        



                                  {/* <!-- /side thumbnail --> */}
                        
                        </div>
                        {/* <!-- /End col --> */}
                    </div>
                    {/* <!-- /End row --> */}
                </div>
                {/* <!-- /End container --> */}
            </div>
            {/* <!-- /End upcoming-programs --> */}
        </section>
        </div>
     );
}
 
export default Index;