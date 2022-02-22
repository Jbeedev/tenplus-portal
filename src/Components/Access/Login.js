import './Login.css';
import RegImage from '../assets/Images/Reg-Portal-bg.png';
const Login = () => {
    return ( 
        <div>
            <div class="page-wrapper-login">
        {/* <!-- ============================================================== --> */}
        {/* <!-- Container fluid  --> */}
        {/* <!-- ============================================================== --> */}
        <div class="container-fluid">
            <div class="mt-5">
                {/* <!-- Row  --> */}
                <div class="row">
                    <div class="col-md-12">
                        <div class=" form5" style={{backgroundImage:`url(${RegImage})`}}>
                            <div class="container">
                                {/* <!-- Row --> */}
                                <div class="row justify-content-center ">
                                    <div class="col-lg-5 col-md-7 login-form text-center both-space">
                                        <div class="card" data-aos="flip-left" data-aos-duration="1200">
                                            <div class=" p-3">
                                                <div class="text-box">
                                                    <p>TenPlus Digital Labs</p>
                                                    <h2 class="title font-light">Login</h2>
                                                    <p>New user? click <a href="register">here</a></p>
                                                    <form class="m-t-30 " method="POST" action="login" id="login-form" class="needs-validation">
                                                        <input type="hidden" name="_token" value="8m9EpHpB0OvAgP4sAJfxuDM4huxy7dhYVbe6BTFe" />                                                                                                                
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <input class="form-control" id="inputGroup-sizing-sm" type="email" name="email" value="" placeholder="Your Email" required autocomplete="email" />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <input class="form-control" id="inputGroup-sizing-sm" type="password" name="password" placeholder="Your Password" required />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 text-left pl-3">
                                                                <div class="form-group">
                                                                    <input id="remember_me" name="remember" type="checkbox" />
                                                                    <label className="login-label" for="remember_me">Remember Me</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 d-flex">
                                                                <button type="submit" class="btn btn-sm btn-md btn-block btn-danger-gradiant btn-arrow">
                                                                    <span> LOGIN <i class="ti-arrow-right"></i></span></button>
                                                            </div>
                                                            <div class="col-lg-12 mt-3">
                                                                <p>Forgot password? Click <a href="forgot-password">here</a></p>
                                                                <p>Don't have an account? <a href="register">Register Now!</a></p>
                                                                <p> Can't login? click <a href="#" class="text-danger fw-bolder"
                                                                                          data-toggle="modal" data-target=".bs-example-modal-lg">here</a>
                                                                    for help</p>
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
            {/* <!-- modal content --> */}
            <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                 aria-hidden="true" style={{display: 'none'}}>
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myLargeModalLabel">Login Helpdesk</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <p><span class="text-warning"> "These credentials do not match our records."</span> if you got this
                                                                                                                message when
                                                                                                                trying to
                                                                                                                Log In, it simply
                                                                                                                means either your
                                                                                                                Email Address or
                                                                                                                your Password is
                                                                                                                wrong, Try to
                                                                                                                enter the correct
                                                                                                                details and also
                                                                                                                note that the
                                                                                                                passwords are case
                                                                                                                sensitive.</p>
                            <p>If perhaps you forgot your Login credentials, just click on the Forgot Password? Link in the Login
                               page,
                               you will get an Email to reset your password, then you can Re-Login with the new credentials after
                               which you can continue with your application.</p>
                            <p class="mt-4">TenPlus Team...</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                    {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>
            {/* <!-- /.modal --> */}
        </div>
        <a class="bt-top btn btn-circle btn-lg btn-info" href="#top"><i class="ti-arrow-up"></i></a></div>
        </div>
     );
}
 
export default Login;