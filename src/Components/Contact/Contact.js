const Contact = () => {
    return ( 
        <div>
            <div class="page-wrapper">
        {/* <!-- ============================================================== --> */}
        {/* <!-- Container fluid  --> */}
        {/* <!-- ============================================================== --> */}
        <div class="container-fluid">
            {/* <!-- ============================================================== --> */}
            {/* <!-- Contact 4  --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- Contact 31  --> */}
            {/* <!-- ============================================================== --> */}
            <div class="bg-info contact4">
                {/* <!-- Row  --> */}
                <div class="row">
                    <div class="container">
                        <div class="col-lg-6 col-md-6 col-sm-12 contact-box">
                            <div class="" data-aos="fade-right" data-aos-duration="1200">
                                <h1 class="title font-light text-white m-t-10 gen-questions">Get In Touch With Us</h1>
                                <form method="POST" action="contact" class="m-t-30" data-aos="fade-left" data-aos-duration="1200">
                                    <input type="hidden" name="_token" value="8m9EpHpB0OvAgP4sAJfxuDM4huxy7dhYVbe6BTFe" />                                    <div class="row" />
                                        <div class="col-lg-6">
                                            <div class="form-group m-t-15">
                                                <input name="name" class="form-control" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group m-t-15">
                                                <input name="email" class="form-control" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group m-t-15">
                                                <input name="phone_no" class="form-control" type="tel" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group m-t-15">
                                                <input name="subject" class="form-control" type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group m-t-15">
                                                <textarea name="message" class="form-control" rows="3" placeholder="message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-flex no-block m-t-20">
                                            <button type="submit" class="btn bg-white text-inverse btn-arrow"><span> Submit <i class="ti-arrow-right"></i></span></button>
                                            <a class="ml-auto text-white align-self-center" href="tel:+2348139251969"><i class="fa fa-phone m-r-10"></i>+234 8139251969</a>
                                        </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12  right-image p-r-0 d-sm-none d-md-block hd-mb">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.151737597152!2d4.5893993138061555!3d8.484623299615574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d66d4cff125%3A0xbd674d7cd24e588e!2sTenPlus%20Digital%20Labs!5e0!3m2!1sen!2sus!4v1628983851308!5m2!1sen!2sus" width="100%" height="600" style={{border:0}}  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            {/* <!-- ============================================================== --> */}
            {/* <!-- End Feature 31  --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- End Contact 4  --> */}
            {/* <!-- ============================================================== --> */}
        </div>
        {/* <!-- ============================================================== --> */}
        {/* <!-- End Container fluid  --> */}
        {/* <!-- ============================================================== --> */}
        {/* <!-- ============================================================== --> */}
        {/* <!-- Back to top --> */}
        {/* <!-- ============================================================== --> */}
        <a class="bt-top btn btn-circle btn-lg btn-info" href="#top"><i class="ti-arrow-up"></i></a> 
        </div>
        </div>
     );
}
 
export default Contact;