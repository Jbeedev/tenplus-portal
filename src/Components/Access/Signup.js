import './Signup.css';
import signupbg from '../assets/Images/Reg-Portal-bg.png'

const Signup = () => {
    return ( 
        <div>
            <div class="page-wrapper">
        <div class="container-fluid">
            <div class="bg-info contact4">
                {/* <!-- Row  --> */}
                <div class="row">
                    <div class="col-md-12">
                        <div class="bg-light">
                            <section>
                                <div id="banner2" class="form5"
                                     style={{backgroundImage:`url(${signupbg})`}}>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-8" data-aos="fade-up" data-aos-duration="1500">
                                                <h2 class="title text-white font-semibold text-uppercase">Sign Up</h2>
                                                <p class="text-white"> Join the frontlines of those making things happen
                                                                       in Nigeria!</p>
                                                <form method="POST" action="https://portal.tenpluslabs.com/register" id="signup-form" class="bg-white needs-validation" >
                                                    <input type="hidden" name="_token" value="ZeuTpRIM08YGldcyxeMQUuCbeJM41pcSqTFTh2XM" />                                                    <div class="form-row b-b">
                                                        <div class="p-20 pb-0 left b-r w-50">
                                                            <label for="first_name" class="text-inverse font-12 text-uppercase">First
                                                                                                               Name:</label>
                                                            <input type="text" name="first_name" id="first_name" value="" class="b-0 p-0 font-14 form-control"
                                                                   placeholder="Your First Name" required autocomplete="first_name"/>
                                                                                                                    </div>
                                                        <div class="p-20 pb-0 right w-50">
                                                            <label for="last_name" class="text-inverse font-12 text-uppercase">Last
                                                                                                               Name:</label>
                                                            <input type="text" name="last_name" id="last_name" value="" class="b-0 p-0 font-14 form-control"
                                                                   placeholder="Your Last Name" required autocomplete="last_name"/>
                                                                                                                    </div>
                                                    </div>
                                                    <div class="form-row b-b p-20 pb-0">
                                                        <label for="email" class="text-inverse font-12 text-uppercase">Email
                                                                                                           Address:</label>
                                                        <input type="text" name="email" id="email" value="" class="b-0 p-0 font-14 form-control"
                                                               placeholder="Enter your Email Address" required autocomplete="email"/>
                                                                                                            </div>
                                                    <div class="form-row b-b">
                                                        <div class="p-20 pb-0 left b-r w-50">
                                                            <label for="password" class="text-inverse font-12 text-uppercase">
                                                                Password:</label>
                                                            <input type="password" name="password" id="password" class="b-0 p-0 font-14 form-control"
                                                                   placeholder="Your Password" required/>
                                                                                                                    </div>
                                                        <div class="p-20 pb-0 right w-50">
                                                            <label for="confirm_password" class="text-inverse font-12 text-uppercase">Confirm
                                                                                                               Password:</label>
                                                            <input type="password" name="password_confirmation" id="confirm_password" class="b-0 p-0 font-14 form-control"
                                                                   placeholder="Confirm Your Password" required/>
                                                                                                                    </div>
                                                    </div>
                                                    <div>
                                                        <button type="submit"
                                                            class="m-0 b-0 p-t-30 p-b-30 font-14 font-semibold bg-danger-gradiant btn btn-block btn-arrow text-center text-white text-uppercase">
                                                            <span>Register Now <i class="ti-arrow-right"></i></span>
                                                        </button>
                                                    </div>
                                                </form>
                                                <p class="text-white mt-5">Already have an account? Click <a
                                                        href="https://portal.tenpluslabs.com/login"
                                                        class="text-danger fw-bolder">here </a>
                                                                           to LOGIN </p>
                                                <p class="text-white">Having problems with your Registration? click <a
                                                        href="#"
                                                        class="text-danger fw-bolder"
                                                        data-toggle="modal"
                                                        data-target=".bs-example-modal-lg">here </a>
                                                                      for Help</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
                            <h4 class="modal-title" id="myLargeModalLabel">Registration Helpdesk</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <p><span
                                    class="text-success">"The email has already been taken, when trying to register"</span>.
                                                                                                                           If
                                                                                                        application.
                            </p>
                            <p class="mt-4">Tenplus Digital Labs Team...</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                    {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>
            {/* <!-- /.modal --> */}
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Back to top -->
        <!-- ============================================================== --> */}
        <a class="bt-top btn btn-circle btn-lg btn-info" href="#top"><i class="ti-arrow-up"></i></a></div>
        </div>
     );
}
 
export default Signup;