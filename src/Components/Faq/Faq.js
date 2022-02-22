import { useState } from 'react';
import FaqList from './FaqList';

const Faq = () => {
    const faqs = [
        {
            title: 'Q. I can’t continue with my application:', 
            body:`You can always come back to your application anytime, click on My Dashboard on the homepage to login to your dashboard, there you can see the status of your Application, if you need to complete, just click on the Continue Application, which would take you to where you stopped.`,
            body2:'Please check to ensure that all the compulsory fields on every page of the application has been completed before submitting.',
            id: 1,
        },
        {
            title: 'Q. I have signed up but did not receive the validation email:', 
            body:'Please refresh your email box or check your updates tab (If you signed up using a gmail account) or check your spam folder for the validation email.',
            id: 2,
        },
        {
            title: 'Q. Javascript not enabled:', 
            body:'If you are trying to register on your mobile phone and you get this notification, please continue the application on a computer or on a javascript enabled mobile phone.',
            id: 3,
        },
        {
            title: 'Q. I have signed up but I have difficulty logging into the application form:', 
            body:'Please follow the instructions in number 1 to validate your account or check and confirm the password with which you registered.',
            id: 4,
        }
    ];

    


    return ( 
        <div>
                {/* <!-- Page wrapper  -->
    <!-- ============================================================== --> */}
    <div class="page-wrapper">
        {/* <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== --> */}
        <div class="container-fluid">
            {/* <!-- ============================================================== -->
            <!-- Static Slider 10  --> */}
            {/* <!-- ============================================================== --> */}
            <div class="banner-innerpage-faq" style={{backgroundImage:`url(http://portal.tenpluslabs.com/assets/images/FAQ.png)`}}>
                <div class="container">
                    {/* <!-- Row  --> */}
                    <div class="row justify-content-center px-4 ">
                        <h1 class="text-white faq-ask">Frequently Asked Questions</h1>
                    </div>
                </div>
                
                
            </div>
            <div class="container">
                {/* <!-- Row --> */}
                <div class="row">
                    <div class="col-12 mt-5 text-left">
                        <h1 class="m-b-0 gen-questions">General Questions</h1>
                        <hr class="mystyle" />
                    </div>
                </div>
                {/* <!-- End Row --> */}
                <div class="row">
                    <div class="col-md-12">
                        <div class="card" data-aos="flip-up" data-aos-duration="1200">
                            <div class="accordion" id="accordion">
                            { faqs.map(({id, title, body, body2}) =>(
                                <FaqList id={id} title={title} body={body} body2={body2} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Back to top -->
        <!-- ============================================================== --> */}
        <a class="bt-top btn btn-circle btn-lg btn-info" href="#top"><i class="ti-arrow-up"></i></a> </div>
    {/* <!-- ============================================================== -->
    <!-- End Page wrapper  --> */}
        </div>
     );
}
 
export default Faq;