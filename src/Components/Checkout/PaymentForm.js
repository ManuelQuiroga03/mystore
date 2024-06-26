import React, { useState, useRef } from "react";
import "../../Styles/PaymentForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentForm = () => {
  return (
    <div className="container cpayment mt-5 px-5">
      <div className="mb-4">
        <h2>Confirm order and pay</h2>
        <span>
          please make the payment, after that you can enjoy all the features and
          benefits.
        </span>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card ccard p-3">
            <h6 className="text-uppercase">Payment details</h6>
            <div className="inputbox mt-3">
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
              <span>Name on card</span>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="inputbox mt-3 mr-2">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                  <i className="fa fa-credit-card"></i>
                  <span>Card Number</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex flex-row">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                    <span>Expiry</span>
                  </div>
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                    <span>CVV</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h6 className="text-uppercase">Billing Address</h6>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                    <span>Street Address</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                    <span>City</span>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                    <span>State/Province</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                    <span>Zip code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-white mb-3">
            
          </div>
          <div className="mt-4 mb-4 d-flex">
            <span>Previous step</span>
          </div>
          <div className="mt-4 mb-4 d-flex justify-content-between">
            <button className="btn btn-success btnOK px-3">Pay $840</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
