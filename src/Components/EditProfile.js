const Editprofile = () => {
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
                                        <img 
                                            src="https://ui-avatars.com/api/?name=Ajibola+Ajibade&amp;color=7F9CF5&amp;background=EBF4FF" class="profile-img01"
                                            style={{ borderRadius: "50%" }}
                                            width={'100%'} 
                                            alt="tech companies in nigeria" />
                                    </div>
                                    <div class="col-md-9 my-3 text-center">'
                                        <h3 class="mt-4 cli-name-h3"> WELCOME, <br />
                                            <strong>Ajibade</strong> Ajibola 
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-group list-group-full">
                                <li class="list-group-item"><a href="http://portal.tenpluslabs.com/user/profile"> Profile Home <span
                                            class="badge badge-info ml-auto pull-right"> <i
                                                class="fa fa-home"></i> </span> </a></li>
                                <li class="list-group-item active"><a href="http://portal.tenpluslabs.com/user/edit-profile"
                                                                      class="text-white"> Edit
                                                                                          Profile<span
                                            class="badge badge-info user-prof ml-auto pull-right"> <i
                                                class="fa fa-edit"></i> </span> </a></li>
                                <li class="list-group-item"><a href="http://portal.tenpluslabs.com/user/change-password"> Change
                                                                                                            Password
                                        <span
                                            class="badge badge-info ml-auto pull-right"> <i
                                                class="fa fa-lock"></i> </span></a></li>
                                <li class="list-group-item">
                                    <form method="POST" action="http://portal.tenpluslabs.com/logout">
                                        <input type="hidden" name="_token" value="8m9EpHpB0OvAgP4sAJfxuDM4huxy7dhYVbe6BTFe" />                                        <a href="http://portal.tenpluslabs.com/logout"
                                           onclick="event.preventDefault(); this.closest('form').submit()"> Logout <span
                                                class="badge badge-info ml-auto pull-right"> <i
                                                    class="fa fa-sign-out"></i> </span></a>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Row --> */}
            <div class="row">
                <div class="col-md-12 p-0">
                    <div class="card mt-md-size">
                        <div class="card-body p-b-0">
                            <h4 class="card-title">Edit Your Profile </h4>
                            {/* <!-- Nav tabs --> */}
                            <form method="POST" action="http://portal.tenpluslabs.com/user/edit-profile" enctype="multipart/form-data"
                                  id="update-profile-info-form" class="needs-validation" novalidate>
                                <input type="hidden" name="_token" value="8m9EpHpB0OvAgP4sAJfxuDM4huxy7dhYVbe6BTFe" />                                <div class="row">
                                    <div class="form-group col-6 col-md-4">
                                        <label for="title">Title:</label>
                                        <input type="text" name="title" id="title"
                                               value=""
                                               class="form-control"
                                               required  />
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="profile_photo">Profile Image:</label>
                                        {/* <!-- <i class="text-danger d-block" style="font-size:7px;"></i> --> */}
                                        <input type="file" name="profile_photo" id="profile_photo" class="form-control" />
                                        
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="last_name">Last Name:</label>
                                        <input type="text" name="last_name" id="last_name"
                                               value="Ajibade"
                                               class="form-control" required autocomplete />
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="first_name">First Name:</label>
                                        <input type="text" name="first_name" id="first_name"
                                               value="Ajibola"
                                               class="form-control" required  />
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="other_name">Middle Name:</label>
                                        <input type="text" name="other_name" id="other_name"
                                               value=""
                                               class="form-control" required autocomplete />
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="gender">Gender:</label>
                                        <select name="gender" id="gender" class="form-control" required>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="marital_status">Marital Status:</label>
                                        <select name="marital_status" id="marital_status" class="form-control" required>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                        </select>
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="email">Email:</label>
                                        <input type="email" name="email" id="email" value="ajibola@tenpluslabs.com"
                                               class="form-control"
                                               required autocomplete />
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="phone">Phone:</label>
                                        <div id="login" onsubmit="process(event)">
                                            <input type="text" id="phone"
                                                   value=""
                                                   class="form-control"
                                                   placeholder="7030000000" required autocomplete />
                                            <input type="hidden" name="phone_no" id="phone-hidden"/>
                                        </div>
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="next_of_kin">Next-of-kin:</label>
                                        <input type="text" name="next_of_kin" id="next_of_kin"
                                               value=""
                                               class="form-control" required autocomplete />
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="country-select">Nationality:</label>
                                        <select onchange="initStates()" id="country-select" name="nationality"
                                                class="form-control" required>
                                            <option selected disabled>Country</option>
                                        </select>
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="state-select">State of origin:</label>
                                        <select id="state-select" name="state_of_origin" class="form-control" required>
                                            <option selected disabled>State</option>
                                        </select>
                                                                            </div>
                                    <div class="form-group col-6 col-md-4">
                                        <label for="dob">D.O.B:</label>
                                        <input type="date" id="dob" name="date_of_birth"
                                               value=""
                                               class="form-control"
                                               required autocomplete />
                                                                            </div>
                                    <div class="form-group col-12 col-md-8">
                                        <label for="home_address">Home Address:</label>
                                        <textarea name="home_address" id="home_address" cols="30" rows="3"
                                                  class="form-control"
                                                  required></textarea>
                                                                            </div>
                                    <div class="form-group col-12 col-md-12">
                                        <h4 class="my-2 ">Education:</h4>
                                    </div>
                                    <div class="form-group col-6 col-md-6">
                                        <label for="school">School Graduated from:</label>
                                        <input type="text" name="school" id="school"
                                               value=""
                                               class="form-control"
                                               required />
                                                                            </div>
                                    <div class="form-group col-6 col-md-6">
                                        <label for="qualification">Qualification:</label>
                                        <input type="text" name="qualification" id="qualification"
                                               value=""
                                               class="form-control" required />
                                                                            </div>
                                    <div class="form-group col-6 col-md-6">
                                        <label for="start_date">From:</label>
                                        <input type="date" name="start_date" id="start_date"
                                               value=""
                                               class="form-control" required />
                                                                            </div>
                                    <div class="form-group col-6 col-md-6">
                                        <label for="end_date">To:</label>
                                        <input type="date" name="end_date" id="end_date"
                                               value=""
                                               class="form-control"
                                               required />
                                                                            </div>
                                    <div class="form-group col-12 my-4 text-center col-md-12">
                                        <input type="submit" class="btn home-btn" value="Update Profile" />
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
        {/* <!-- ============================================================== --> */}
        {/* <!-- End Container fluid  --> */}
        {/* <!-- ============================================================== --> */}
    </div>

        </div>
     );
}
 
export default Editprofile;