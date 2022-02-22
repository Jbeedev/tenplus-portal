import {useState} from 'react';

import './Skill-acquisition2022.css';
import SkillImg from './assets/Images/tenplus-computer.png';
import BannerImg1 from './assets/Images/Skill-Programme-banner.png';
import BannerImg2 from './assets/Images/Paving-way-for-the-future.png';

const Skill2022 = () => {


    const [toggleActive, setToggleActive] = useState(1);

    const toggle = (index) => {
        setToggleActive(index)
    }


    return(
        <div>
            <div className="page-wrapper bg-light">
        {/* <!-- ============================================================== --> */}
        {/* <!-- Container fluid  --> */}
        {/* <!-- ============================================================== --> */}
        <div className="container-fluid">
            
            <div className="bg-light">
                <section id="slider-sec" className="slider3">
                    <div id="slider3" className="carousel bs-slider control-round indicators-line" data-ride="carousel"
                         data-pause="always" data-interval="8000">
                        <ol className="carousel-indicators hide">
                            <li data-target="#slider3" data-slide-to="0" className="active"></li>
                            <li data-target="#slider3" data-slide-to="1"></li>
                        </ol>
                        
                        {/* <!-- Wrapper For Slides --> */}
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                {/* <!-- Slide Background -->*/}
                                <img 
                                    src={BannerImg2} width="1519.2px"
                                    height="583.7px" alt="We are Digital Agency" className="slide-image"
                                    data-animation="animated fadeIn" 
                                />
                                <div className="bs-slider-overlay"></div>
                                {/* <!-- Slide Text Layer --> */}
                                <div className="slide-text">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 text-center align-self-center px-4">
                                                <h2 data-animation="animated zoomInRight" className="title text-white">
                                                    2022 Skills Acquisition Program 1.0
                                                </h2>
                                                <p data-animation="animated fadeInLeft"
                                                   className="m-t-40 m-b-40 hidden-sm-down text-white">
                                                       <i className="fa fa-map-marker col-main-warning"></i>
                                                             Location: Ilorin &nbsp; &nbsp; <i className="fa fa-users col-main-warning"></i>
                                                             200 Students Annually
                                                </p>
                                                <div className="skills-btn-div">
                                                                                                                                                                        <a className="btn btn-info-gradiant btn-md btn-arrow  registerCount2"
                                                               data-start-date="2021-12-20 00:00:00"
                                                               data-end-date="2022-01-10 23:59:59"
                                                               data-animation="animated fadeInLeft"></a>
                                                                                                                                                                
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End of Slide --> */}
                            {/* <!-- Second Slide --> */}
                            <div className="carousel-item text-center">
                                {/* <!-- Slide Background -->*/}
                                <img 
                                    src={BannerImg1} width="1519.2px"
                                    height="583.7px" alt="Building Magical Apps" className="slide-image"
                                    data-animation="animated fadeIn"
                                />
                                <div className="bs-slider-overlay"></div>
                                {/* <!-- Slide Text Layer --> */}
                                <div className="slide-text">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 text-center align-self-center px-4">
                                                <h2 data-animation="animated zoomInRight" className="title text-white">
                                                    Paving way for the future</h2>
                                                <p data-animation="animated fadeInLeft"
                                                   className="m-t-40 m-b-40 hidden-sm-down text-white"><i
                                                        className="fa fa-map-marker col-main-warning"></i> Location: Ilorin
                                                                                                       &nbsp; &nbsp; <i
                                                        className="fa fa-users col-main-warning"></i> 200 Students Annually
                                                </p>
                                                <div className="skills-btn-div">
                                                                                                                                                                        <a className="btn btn-info-gradiant btn-md btn-arrow  registerCount2"
                                                               data-start-date="2021-12-20 00:00:00"
                                                               data-end-date="2022-01-10 23:59:59"
                                                               data-animation="animated fadeInLeft"></a>
                                                                                                                    
                                                                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End of Slide --> */}
                            {/* <!-- End of Wrapper For Slides --> */}
                            {/* <!-- Slider Control --> */}
                            <div className="slider-control">
                                {/* <!-- Left Control --> */}
                                <a className="left carousel-control-prev text-white font-14" href="#slider3" role="button"
                                   data-slide="prev"> <span className="ti-arrow-left" aria-hidden="true"></span> <b
                                        className="sr-only font-normal">Previous</b> </a>
                                {/* <!-- Right Control --> */}
                                <a className="right carousel-control-next text-white font-14" href="#slider3" role="button"
                                   data-slide="next"> <span className="ti-arrow-right" aria-hidden="true"></span> <b
                                        className="sr-only font-normal">Next</b> </a>
                            </div>
                            {/* <!-- End of Slider Control --> */}
                        </div>
                    </div>
                    {/* <!-- End Slider --> */}
                </section>
            </div>
        </div>
        {/* <!-- ============================================================== --> */}
        {/* <!-- End Container  --> */}
        {/* <!-- ============================================================== --> */}
        
        <div className="container-fluid px-1">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body p-b-0">
                            {/* <!-- Nav tabs --> */}
                            <ul className="nav nav-tabs customtab2" role="tablist">
                                <li className="nav-item text-center" style={{width:'20%'}}>
                                    <div className={ toggleActive === 1 ? "nav-link active" : "nav-link" } data-toggle="tab" role="tab">
                                        <span                   
                                            className="hidden-sm-up">
                                                <small 
                                                    style={{fontSize: '13px'}} onClick={ () => toggle(1)}>
                                                        About
                                                </small>
                                        </span> 
                                        <span 
                                            className="hidden-xs-down" onClick={ () => toggle(1) } >
                                                About
                                        </span>
                                    </div>
                                </li>
                                <li className="nav-item text-center" style={{width:'20%'}}>
                                    <div className={ toggleActive=== 2 ? "nav-link active" : "nav-link" } data-toggle="tab" role="tab">
                                        <span                   
                                            className="hidden-sm-up">
                                                <small 
                                                    style={{fontSize: '13px'}} onClick={ () => toggle(2)}>
                                                        Requirements
                                                </small>
                                        </span> 
                                        <span 
                                            className="hidden-xs-down" onClick={ () => toggle(2) } >
                                                Requirements
                                        </span>
                                    </div>
                                </li>
                                <li className="nav-item text-center" style={{width:'20%'}}>
                                    <div className={ toggleActive=== 3 ? "nav-link active" : "nav-link" } data-toggle="tab" role="tab">
                                        <span                   
                                            className="hidden-sm-up">
                                                <small 
                                                    style={{fontSize: '13px'}} onClick={ () => toggle(3)}>
                                                        Pricing & Schedule
                                                </small>
                                        </span> 
                                        <span 
                                            className="hidden-xs-down" onClick={ () => toggle(3) } >
                                                Pricing & Schedule
                                        </span>
                                    </div>
                                </li>
                                <li className="nav-item text-center" style={{width:'20%'}}>
                                    <div className={ toggleActive=== 4 ? "nav-link active" : "nav-link" } data-toggle="tab" role="tab">
                                        <span                   
                                            className="hidden-sm-up">
                                                <small 
                                                    style={{fontSize: '13px'}} onClick={ () => toggle(4)}>
                                                        News & Updates
                                                </small>
                                        </span> 
                                        <span 
                                            className="hidden-xs-down" onClick={ () => toggle(4) } >
                                                News & Updates
                                        </span>
                                    </div>
                                </li>
                                <li className="nav-item text-center" style={{width:'20%'}}>
                                    <div className={ toggleActive=== 5 ? "nav-link active" : "nav-link" }data-toggle="tab" role="tab">
                                        <span                   
                                            className="hidden-sm-up">
                                                <small 
                                                    style={{fontSize: '13px'}} onClick={ () => toggle(5)}>
                                                        Application
                                                </small>
                                        </span> 
                                        <span 
                                            className="hidden-xs-down" onClick={ () => toggle(5) } >
                                                Application
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">
                                <div className={ toggleActive === 1 ? "tab-pane active p-20 pt-5" : "tab-pane p-20 pt-5" } id="home" role="tabpanel">
                                    <div className="row">
                                        <div className="p-20 pt-5 col-md-5 offset-md-1">
                                            <h6 className="mt-4">About The Program</h6>
                                            <h3>2022 Skill Acquisition Program 1.0</h3>
                                            <p className="prog-text">The 2022 Skill Acquisition Program 1.0 is the 1st of
                                                                 three set of trainings in 2022. This annual program is
                                                                 aimed at creating a network of skilled change-makers,
                                                                 specifically youths and females
                                                                 across various sectors in Nigeria but with special
                                                                 interest in those who live in or can travel to Kwara
                                                                 state (Ilorin).</p> <br />
                                            <p> This program is brought to you, and sponsored by TenPlus Digital Labs.
                                                It is hosted at the company's physical location. Sooner than later,
                                                there will be options to undergo this program online. </p>
                                            <p>TenPlus Digital Labs has a goal of building the capacity of 200 Nigerian
                                               Youths (especially youths and females) annually with
                                               special focus on impacting valuable digital skills that remains relevant
                                               even in future generations. This target number is most likely going to
                                               grow higher when online
                                               training commences. The training session boasts of top class tutors with
                                               high level of experience on their respective fields. </p>
                                            
                                            <h3 className="mt-4 ">Objectives</h3>
                                            <ul>
                                                <li> To completely transform the mindset of youths in Nigeria to become
                                                     more entrepreneurial, solution driven, and to equip them to be
                                                     self-employed or job creators.
                                                </li>
                                                <li> To create an ecosystem with individuals that can provide needed
                                                     solutions by themselves, and one being run by young people.
                                                </li>
                                                <li> Change the way learning or information is received in Nigeria.</li>
                                            
                                            </ul>
                                            
                                            <h3 className="mt-4 ">Other Benefits</h3>
                                            <ul>
                                                <li>Free Wifi</li>
                                                <li>Entrepreneurship Training</li>
                                                <li>Freelancing Training</li>
                                                <li>Customized T-shirt and Book</li>
                                            </ul>
                                        </div>
                                        <div className="mt-5 col-md-5 text-center">
                                            <div className="">
                                                <img src={SkillImg}
                                                     className="img-responsive" width="400px" height="330px"
                                                     alt="Web Development" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={ toggleActive === 2 ? "tab-pane active p-20 pt-5" : "tab-pane p-20 pt-5" } id="requirements" role="tabpanel">
                                    
                                    
                                    <h3 className="mt-4">Requirements to apply for the training program</h3>
                                    <ol>
                                        <li>High performance laptop</li>
                                        <li>Based in, or can relocate to Ilorin for the period of training (Training is
                                            physical)
                                        </li>
                                        <li>Payment Receipt for Training Course Applied</li>
                                    </ol>
                                </div>
                                <div className={ toggleActive === 3 ? "tab-pane active p-20 pt-5" : "tab-pane p-20 pt-5" } id="pricing-and-schedule" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6 offset-md-1 col-md-">
                                            <h2 className="mb-3">Pricing and Schedules</h2>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">S/N</th>
                                                        <th scope="col">Course</th>
                                                        <th scope="col">Duration</th>
                                                        <th scope="col">Fee (₦)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td className="te">Web Development (Coding)</td>
                                                        <td>4 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Web Development (CMS - WordPress)</td>
                                                        <td>3 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Mobile App Development</td>
                                                        <td>4 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Data Science and Machine Learning (Artificial
                                                            Intelligence)
                                                        </td>
                                                        <td>4 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Data Science (AI)</td>
                                                        <td>2 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>Machine Learning (AI)</td>
                                                        <td>2 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Graphics Design (Complete Training Program)</td>
                                                        <td>4 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Digital Marketing (Complete Training Program)</td>
                                                        <td>4 Months</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Digital Marketing (Field Specific Training Program)</td>
                                                        <td>3 -6 Weeks</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">8</th>
                                                        <td colspan="2">Entrepreneurship and Freelancing Training</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="alert alert-danger text-center  mt-5 " role="alert">
                                                <p className="pt-3"> We have a flexible payment option in place. Applicants
                                                                 are allowed to pay custom amounts to reserve their
                                                                 slots, and complete payment <strong>on or before the
                                                                                                     scheduled
                                                                                                     date</strong></p>
                                                <p>We offer trainings for all our services but only the ones available
                                                   for each round will be displayed here. Find info for our services <a
                                                        href="https://www.tenpluslabs.com/service">here</a></p>
                                            </div>
                                        </div>
                                    
                                    </div>
                                
                                </div>
                                <div className={ toggleActive === 4 ? "tab-pane active p-20 pt-5 text-center" : "tab-pane p-20 pt-5" } id="news-update" role="tabpanel">
                                    <h3 className="mb-3">Our Latest News</h3>
                                    <p><strong>Application starts:</strong> Monday, 20th Dec 2021</p>
                                    <p><strong>Application Ends:</strong> Monday, 10th Jan 2022</p>
                                    <p><strong>Training Begins:</strong> Monday, 10th Jan 2022</p>
                                </div>
                                <div className={ toggleActive === 5 ? "tab-pane active p-20 pt-5" : "tab-pane p-20 pt-5" } id="application" role="tabpanel">
                                    <div className="row">
                                        
                                        <div className=" pt-5 col-md-5 offset-md-1">
                                            <h3 className="m">Steps to apply for this year's program</h3>
                                            <p> Create an account </p>
                                            <p>Login</p>
                                            <p> Go to Profile</p>
                                            <p>Click on Active Programs</p>
                                            <p>Select the Program Name</p>
                                            <p>Fill & Submit Application Form</p>
                                            <p>Proceed to Payment </p>
                                            <p>Done</p>
                                        </div>
                                        
                                        <div className=" col-md-5 offset-md-1">
                                            <h2 className="mt-5 text-danger">Browser Preference is Google Chrome or
                                                                         Firefox</h2>
                                                                                                                                                <a className="btn btn-primary btn-md btn-arrow mt-4 registerCount2"
                                                       data-start-date="2021-12-20 00:00:00"
                                                       data-end-date="2022-01-10 23:59:59"
                                                       data-animation="animated fadeInUp"></a>
                                                                                                
                                                                                    
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ============================================================== --> */}
        {/* <!-- Back to top --> */}
        {/* <!-- ============================================================== --> */}
        <a className="bt-top btn btn-circle btn-lg btn-info" href="#top"><i className="ti-arrow-up"></i></a>
    </div>
        </div>
    )
}

export default Skill2022;