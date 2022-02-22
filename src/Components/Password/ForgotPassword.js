const ForgotPwd = () => {
    return ( 
        <div>
            <div class="page-wrapper">
        {/* <!-- ============================================================== --> */}
        {/* <!-- Container fluid  --> */}
        {/* <!-- ============================================================== --> */}
        <div class="container-fluid">
            <div class="mt-5">
                {/* <!-- Row  --> */}
                <div class="row">
                    <div class="col-md-12">
                        <div class=" form5" style="background-color: #fff;">
                            <div class="container">
                                {/* <!-- Row --> */}
                                <div class="row justify-content-center">
                                    <div class="col-lg-5 col-md-7 text-center both-space">
                                                                                <div class="forgot-pass-card" data-aos="flip-left" data-aos-duration="1200">
                                            <div class="card-body">
                                                <div class="text-box">
                                                    <p>Reset Password</p>
                                                    <form method="POST" action="forgot-password" id="forgot-password-form" class="m-t-30">
                                                        <input type="hidden" name="_token" value="FOw6zS9jLvFwA7gXFLk4y7RObfRjNz4zuT6TS2bH" />                                                        
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <label for="email"> E-mail Address</label>
                                                                <div class="form-group">
                                                                    <input class="form-control" name="email" type="email" placeholder="Your Email Address" required />
                                                                </div>
                                                                                                                            </div>
                                                            
                                                            <div class="col-lg-12 d-flex">
                                                                <button type="submit" class="btn btn-md btn-block btn-danger-gradiant btn-arrow"><span> Send Password Reset Link <i class="ti-arrow-right"></i></span></button>
                                                            </div>
                                                        
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        <a class="bt-top btn btn-circle btn-lg btn-info" href="#top"><i class="ti-arrow-up"></i></a> </div>
        </div>
     );
}
 
export default ForgotPwd;