const Show = () => {
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
                                        <img src="https://ui-avatars.com/api/?name=Ajibola+Ajibade&amp;color=7F9CF5&amp;background=EBF4FF" class="profile-img01" style={{borderRadius: '50%', width:'100%'}} alt="Ajibola Ajibade" />
                                    </div>
                                    <div class="col-md-9 my-3 text-center">
                                        <h3 class="mt-4 cli-name-h3"> WELCOME, <br /> <strong>Ajibade</strong> Ajibola </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-group list-group-full">
                                <li class="list-group-item  active"> <a href="user/profile" class="text-white"> Profile Home <span class="badge ml-auto user-prof pull-right"> <i class="fa fa-home "></i> </span> </a></li>
                                <li class="list-group-item"> <a href="user/edit-profile"> Edit Profile<span class="badge badge-info ml-auto pull-right"> <i class="fa fa-edit"></i> </span> </a></li>
                                <li class="list-group-item"> <a href="user/change-password"> Change Password <span class="badge badge-info ml-auto pull-right"> <i class="fa fa-lock"></i> </span></a></li>
                                <li class="list-group-item">
                                    <form method="POST" action="logout">
                                        <input type="hidden" name="_token" value="zwKfn4u4qJUgwDz6uPsmaMv40hdloPCY2UcoDGq9" />                                        
                                        <a href="logout" onclick="event.preventDefault(); this.closest('form').submit()" > Logout <span class="badge badge-info ml-auto pull-right"> <i class="fa fa-sign-out"></i> </span></a>
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
                    <div class="card">
                        <div class="card-body p-b-0">
                            <h4 class="card-title">Your Information </h4>
                                {/* <!-- Nav tabs --> */}
                            <ul class="nav nav-tabs customtab" role="tablist">
                                <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#current-application" role="tab"><span class="hidden-sm-up"><small style={{fontSize: '13px'}}>Current Application(s)</small></span> <span class="hidden-xs-down"> <i class="fa fa-edit"></i> Current Application(s)</span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#active-program" role="tab"><span class="hidden-sm-up"><small style={{fontSize: '13px'}}>Active Program(s)</small></span> <span class="hidden-xs-down"> <i class="fa fa-feed"></i> Active Program(s)</span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#incoming-program" role="tab"><span class="hidden-sm-up"><small style={{fontSize: '13px'}}>Upcoming Program(s)</small></span> <span class="hidden-xs-down"> <i class="fa fa-feed"></i> Upcoming Program(s)</span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#personal-information" role="tab"><span class="hidden-sm-up"><small style={{fontSize: '13px'}}>Personal Info</small></span> <span class="hidden-xs-down"> <i class="fa fa-user"></i> Personal Information </span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#consulting-session" role="tab"><span class="hidden-sm-up"><small style={{fontSize: '13px'}}>Payments</small></span> <span class="hidden-xs-down"> <i class="fa fa-credit-card"></i> Payments</span></a> </li>
                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#receipt" role="tab"><span class="hidden-sm-up"><small style={{fontSize: '13px'}}>Receipts</small></span> <span class="hidden-xs-down"> <i class="fa fa-credit-card"></i> Receipts</span></a> </li>
                            </ul>
                                {/* <!-- Tab panes --> */}
                            <div class="tab-content">
                                <div class="tab-pane active" id="current-application" role="tabpanel">
                                    <div class="row">
                                            {/* <!-- column --> */}
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>S/N</th>
                                                                    <th>REGISTERED PROGRAM</th>
                                                                    <th>STATUS</th>
                                                                    <th class="text-nowrap">ACTION</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane  p-20" id="active-program" role="tabpanel">
                                    <div class="row">
                                            {/* <!-- column --> */}
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>S/N</th>
                                                                    <th>PROGRAM</th>
                                                                    <th>STATUS</th>
                                                                    <th>COUNTDOWN</th>
                                                                    <th>APPLY</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                                                                                    <tr>
                                                                        <td class="text-danger" colspan="5">No Active Events. Check Back Later</td>
                                                                    </tr>
                                                                                                                            
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane  p-20" id="incoming-program" role="tabpanel">
                                    <div class="row">
                                            {/* <!-- column --> */}
                                        <div class="col-12">
                                                                                         <div class="card">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>S/N</th>
                                                                    <th>PROGRAM</th>
                                                                    <th>STATUS</th>
                                                                    <th>COUNTDOWN</th>
                                                                    <th>APPLY</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td> <p><a href="2022-skill-acquisition-program-1" class="text-dark">2022 Skill Acquisition Program 1.0</a></p> </td>
                                                                        
                                                                        <td> <p class="badge badge-incomplete text-white">Incoming</p></td>
                                                                        
                                                                        <td><p class="btn countdown-btn1 registerCount2"
                                                                               data-start-date="2021-12-20 00:00:00"
                                                                               data-end-date="2022-01-10 23:59:59"
                                                                               data-animation="animated fadeInRight"><i class="fa fa-clock"></i></p> </td>
                                                                        <td class="text-nowrap">
                                                                            <a href="2022-skill-acquisition-program-1/notify" class="badge  badge-complete">NOTIFY ME</a> 
                                                                        </td>
                                                                    </tr>
                                                                                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td> <p><a href="tenplus-digital-labs-skills-contest-1" class="text-dark">TenPlus Digital Labs Skills Contest 1.0</a></p> </td>
                                                                        
                                                                        <td> <p class="badge badge-incomplete text-white">Incoming</p></td>
                                                                        
                                                                        <td><p class="btn countdown-btn1 registerCount2"
                                                                               data-start-date="2022-07-09 00:00:00"
                                                                               data-end-date="2022-07-23 23:59:59"
                                                                               data-animation="animated fadeInRight"><i class="fa fa-clock"></i></p> </td>
                                                                        <td class="text-nowrap">
                                                                            <a href="tenplus-digital-labs-skills-contest-1/notify" class="badge  badge-complete">NOTIFY ME</a> 
                                                                        </td>
                                                                    </tr>
                                                                                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane p-20" id="personal-information" role="tabpanel">
                                    <div class="row">
                                            {/* <!-- column --> */}
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:'20%'}}>DATA</th>
                                                                    <th>INFO</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Firstame:</td>
                                                                    <td> Ajibola</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Lastname:</td>
                                                                    <td> Ajibade </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Middlename:</td>
                                                                    <td> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email Address:</td>
                                                                    <td>ajibola@tenpluslabs.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Gender:</td>
                                                                    <td class="text-capitalize"> </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 text-center">
                                            <a href="user/edit-profile" class="btn btn-primary"> <i class="fa fa-edit"></i> Edit profile</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane p-20" id="consulting-session" role="tabpanel">
                                    <div class="row">
                                            {/* <!-- column --> */}
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>S/N</th>
                                                                    <th>Program</th>
                                                                    <th>Payment Status</th>
                                                                    <th class="text-nowrap">Amount (₦)</th>
                                                                    <th class="text-nowrap">Outstanding (₦)</th>
                                                                    <th style={{width:'22%'}}>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                                                                                    <tr>
                                                                        <td class="text-danger text-center" colspan="6">You haven't applied for any Programme/Event yet!
                                                                            <br />
                                                                                                                        Check Our Active Programmes to get started.
                                                                        </td>
                                                                    </tr>
                                                                                                                            
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane p-20" id="receipt" role="tabpanel">
                                    <div class="row">
                                            {/* <!-- column --> */}
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>S/N</th>
                                                                    <th>Program</th>
                                                                    <th>Payment Status</th>
                                                                    <th class="text-nowrap">Amount (₦)</th>
                                                                    <th class="text-nowrap">Outstanding (₦)</th>
                                                                    <th style={{width:'22%'}}>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                                                                                    <tr>
                                                                        <td class="text-danger text-center" colspan="6">You haven't applied for any Programme/Event yet!
                                                                            <br />
                                                                                                                        Check Our Active Programmes to get started.
                                                                        </td>
                                                                    </tr>
                                                                                                
                                                            </tbody>
                                                        </table>
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
            {/* <!-- ============================================================== --> */}
            {/* <!-- End Container fluid  --> */}
            {/* <!-- ============================================================== --> */}
            </div>
        </div>
     );
}
 
export default Show;