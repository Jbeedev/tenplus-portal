const Receipt = () => {
    return ( 
        <div>
            <div class="container-fluid padding">
            <div class="blue_box mt-3"></div>
            <div class="row mt-5 ">
                <div class="col-8 h-50">
                    <h2 class="uppercase">Payment Receipt</h2>
                </div>
                <div class="col-4 h-50 border-left-black">
                    <div class="img-container mb-3">
                        <img src="{{asset('assets/images/logos/logo-dark-round.png')}}" class="img-fluid m-auto" alt="your logo" />
                    </div>
                    <div>
                        <p class="date">Date: {{  }}</p>
                        <p class="receipt_no">Receipt reference.: {{  }}</p>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xsm-12">
                        <h5 class="date">From</h5>
                        <p>TenPlus Digital Labs LTD</p>
                        <p>29. University RD</p>
                        <p>Ilorin, Kwara state</p>
                        <p>+2348139251969</p>
                        <p>info@tenpluslabs.com</p>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xsm-12">
                        <h5 class="date">To</h5>
                        <p>Client name: {{  }}</p>
                        <p>Address: {{  }}</p>
                        <p>Email: {{  }}</p>
                        <p>Phone number: +{{  }}</p>
                    </div>
            </div>
            <div class="table-responsive-sm mt-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="center">S/N</th>
                            <th>Program</th>
                            <th>Description</th>
{/* {{--                            <th class="center">Quantity</th>--}} */}
                            <th class="right">Unit Cost</th>
                            <th class="right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($courses as $course)
                            <tr>
                                <td class="center">{{  }}</td>
                                <td class="left">{{  }}</td>
                                <td class="left">{{  }}</td>
{/* {{--                                <td class="center">1</td>--}} */}
                                <td class="right">₦{{   }}</td>
                                <td class="right">₦{{   }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-5"></div>
                <div class="col-lg-4 col-sm-5 ml-auto">
                    <table class="table table-clear">
                        <tbody>
                            <tr>
                                <td class="left">
                                    <strong>Subtotal</strong>
                                </td>
                                <td class="right">₦{{ }}</td>
                            </tr>
                            <tr>
                                <td class="left">
                                    <strong>VAT ({{ }}%)</strong>
                                </td>
                                <td class="right">₦{{ }}</td>
                            </tr>
                            <tr>
                                <td class="left">
                                    <strong>Reg. fee</strong>
                                </td>
                                <td class="right">₦{{ }}</td>
                            </tr>
                            @if($order coupon)
                                <tr>
                                    <td class="left">
                                        <strong>Discount ({{ }}%)</strong>
                                    </td>
                                    <td class="right">₦{{ }}</td>
                                </tr>
                            @endif
                            <tr>
                                <td class="left">
                                    <strong>Total</strong>
                                </td>
                                <td class="right">
                                    <strong>₦{{ }}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td class="left">
                                    <strong>Outstanding</strong>
                                </td>
                                <td class="right">
                                    <strong>₦ number_format(, 2, '.', ',') </strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="receipt-stamp position-absolute"><img src="asset('assets/images/logos/receipt-stamp.png')" alt="" /></div>
                </div>
                <div class="blue_box"></div>
                <div class="row">
                    <div class="col-12 mt-2 mb-2">
                        <p>Payment Channel:</p>
                        <hr />
                        <p class="">{{  }}</p>
                    </div>
                </div>
                <div class="blue_box mb-3"></div>
            </div>
        </div>
        </div>
     );
}
 
export default Receipt;