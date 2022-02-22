const Checkout = () => {
    return (
        <div>
            <div class="page-wrapper-profile bg-light">

<div class="container">

    <div class="row">
        <div class="mb-4 col-md-4 order-md-2">

            <br />
            <br />
            <br />
            <ul class="mb-3 list-group" id="order-summary">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="text-white">Subtotal</h6>
                    </div>
                    <span class="span-right"> ₦ $application course price </span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="text-white"></h6>
                    </div>
                    <span class="">
                        ₦$application course price * env('VAT')) / 100 
                    </span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="text-white">Total</h6>
                    </div>
                    <span class="">
                        ₦ $application course price $application course price * env('VAT')) / 100
                    </span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="promo-code">
                        <h6 class="promo-code">Promo code</h6>
                    </div>
                    <span class="promo-code">- ₦ $discount </span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <div>
                        <span><small>Total Due Today</small></span>
                        <p class="total-amount">₦20</p>
                    </div>
                </li>
                <li>
                    <div class="my-2 row">
                        <div class="col-md-6 offset-md-1 col-7 btn-cutom-sm ">
                            <button class="checkout-btn-custom" data-toggle="modal"
                                data-target="#customamount">
                                <i class="bi-arrow-return-right"></i> Custom Amount
                            </button>
                        </div>
                        <div class="col-md-2 col-3">
                            <button class="checkout-btn"><i class="bi-arrow-return-right"></i>
                                Checkout</button>
                        </div>
                    </div>
                </li>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="customamount" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close check-close" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="POST" action="" id="custom-amount-form"
                                    class="needs-validation">
                                    <div class="form-group col-12 col-md-12">
                                        <label for="custom_amount">Custom Amount (₦)</label>
                                        <input type="text" name="custom_amount" id="custom_amount /"
                                            class="form-control" placeholder="e.g. 120000" required />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary"
                                    data-dismiss="modal">Close</button>
                                <button type="button" id="custom-amount-submit"
                                    onclick="$('#custom-amount-form').submit()" class="btn btn-primary">Save
                                    changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </ul>


        </div>

        {/* <!------- section 2 --------> */}

        <div class="col-md-8 order-md-1">
            <p>
            <h2 class="pl-1">Review and Checkout</h2>
            </p>
            <ul class="mb-3 list-group">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="">Course</h6>
                        <small class="text-muted">specific area of interest</small>
                    </div>
                    <span class="text-muted"> Price/Cycle</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="">Website Development</h6>


                    </div>
                    <span class="text-muted"> ₦8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condense">

                    <div class="mt-2">
                        <div><a href="application.html" class="check-btn-update"><i
                                    class="bi-arrow-counterclockwise"></i>Back to Application</a></div>
                    </div>

                    <span><button class=" btn-empty-cart"><i class="bi-trash-fill"></i> Empty Cart</button>
                    </span>

                </li>

            </ul>
            <h4 class="pl-1 mb-3">Promotion</h4>
            <form class="p-2 card">
                <div class="input-group">
                    <input type="text" class="form-control "
                        placeholder="Enter Promo code if you have one" />
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-redeem">Redeem</button>
                    </div>
                </div>
            </form>
            <h4 class="pl-1 mb-3">Billing Details</h4>
            <ul class="mb-3 list-group">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h4 class="text-muted"><strong>$program name</strong></h4>
                        <p class="text-muted">$lastname $fistname</p>
                        <p class="text-muted">$email</p>
                        <p class="text-muted">$Address</p>
                        <p class="text-muted">$state</p>
                        <p class="text-muted">$country</p>
                        <p class="text-muted">&phone-no</p>
                    </div>

                </li>

            </ul>

            <h4 class="pl-1 mb-3">Additional Contact Details</h4>
            <ul class="mb-3 list-group">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <div class="text-muted">You may specify alternative registered contact details
                            in your
                            order when placing an order on behalf another person or entity
                        </div>
                        <p>
                        <div>
                            <input type="text" class="form-control" id="firstName /"
                                placeholder="Alternate Contact details(optional) " value="" required />
                        </div>
                        </p>

                    </div>
                </li>
            </ul>
            <h4 class="pl-1 mb-3">Make Payment</h4>
            <ul class="mb-3 list-group">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <input type="radio" aria-label="Checkbox for following text input" />
                        <span>Paystack (Subscription)</span>
                    </div>
                </li>

            </ul>
            <div class="pl-2">
                <input type="checkbox" aria-label="Checkbox for following text input" />
                <span>I have read and agree to the <a href="https://tenpluslabs.com/terms">Terms of
                        Service</a></span>
            </div>

            <hr class="mb-4" />
            <div class="mb-5 text-center">
                <button class="btn btn-lg btn-block submit-btn" type="submit">Continue to checkout</button>
            </div>


            </div>
        </div>
    </div>

</div>

</div>



    )
}

export default Checkout;