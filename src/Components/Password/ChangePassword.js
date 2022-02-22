const ChangePwd = () => {
    return ( 
        <div>
            <div class="page-wrapper-profile bg-light">
        {/* <!-- ============================================================== --> */}
        {/* <!-- Container fluid  --> */}
        {/* <!-- ============================================================== --> */}
        <div class="container">
            {/* <!-- Row --> */}
            <div class="row">
                <div class="col-md-12 m-t-30">
                    <div class="row">
                        <div class="col-md-8 card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3 text-right">
                                        <img src="https://ui-avatars.com/api/?name=Ajibola+Ajibade&amp;color=7F9CF5&amp;background=EBF4FF" class="profile-img01"
                                             style="border-radius: 50%; width:100%;" alt="tech companies in nigeria" />
                                    </div>
                                    <div class="col-md-9 my-3 text-center">
                                        <h3 class="mt-4 cli-name-h3"> WELCOME, <br />
                                            <strong>Ajibade</strong> Ajibola 
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-group list-group-full">
                                <li class="list-group-item"><a href="user/profile"> Profile Home <span
                                            class="badge badge-info ml-auto pull-right"> <i class="fa fa-home"></i> </span> </a></li>
                                <li class="list-group-item"><a href="user/edit-profile"> Edit Profile<span
                                            class="badge badge-info ml-auto pull-right"> <i class="fa fa-edit"></i> </span> </a></li>
                                <li class="list-group-item active"><a href="user/change-password" class="text-white"> Change
                                                                                                                      Password <span
                                            class="badge badge-info user-prof ml-auto pull-right"> <i class="fa fa-lock"></i> </span></a>
                                </li>
                                <li class="list-group-item"><form method="POST" action="logout">
                                        <input type="hidden" name="_token" value="zwKfn4u4qJUgwDz6uPsmaMv40hdloPCY2UcoDGq9" />                                        <a href="logout" onclick="event.preventDefault(); this.closest('form').submit()" > Logout <span class="badge badge-info ml-auto pull-right"> <i class="fa fa-sign-out"></i> </span></a>
                                    </form></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Row --> */}
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="card mt-md-size">
                        <div class="card-body p-b-0">
                            <h4 class="card-title">Update Password:</h4>
                            {/* <!-- Nav tabs --> */}
                            <form method="POST" action="user/change-password" id="change-password-form" class="needs-validation" novalidate>
                                <input type="hidden" name="_token" value="zwKfn4u4qJUgwDz6uPsmaMv40hdloPCY2UcoDGq9" />                                <div class="row">
                                    <div class="form-group col-12">
                                        <label for="current_password">Current Password:</label>
                                        <input type="password" name="current_password" id="current_password" class="form-control" required />
                                                                            </div>
                                    <div class="form-group col-12">
                                        <label for="password">New Password:</label>
                                        <input type="password" name="password" id="password" class="form-control" required />
                                                                            </div>
                                    <div class="form-group col-12">
                                        <label for="password_confirmation">Repeat New Password:</label>
                                        <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" required />
                                                                            </div>
                                    <div class="form-group col-12 text-center">
                                        <input type="submit" value="Update Password"
                                               class="btn btn-md btn-block btn-danger-gradiant btn-arrow" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ============================================================== --> */}
            {/* <!-- End Container  --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- Back to top --> */}
            {/* <!-- ============================================================== --> */}
            <a class="bt-top btn btn-circle btn-lg btn-info" href="#top"><i class="ti-arrow-up"></i></a>
        </div>
    </div>
        </div>
     );
}
 
export default ChangePwd;