import React from "react";
import "../../styles/account.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import DatePicker from 'react-datepicker'
import { Checkbox } from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {
    const [startDate, setDate] = React.useState(new Date)
    const [rangeStart, setRangeStart] = React.useState(new Date)
    const defaultEndDate = new Date()
    defaultEndDate.setDate(defaultEndDate.getDate() + 7)
    const [rangeEnd, setRangeEnd] = React.useState(defaultEndDate)
    const today = new Date()

    const selectDateHandler = (d) => {
        setDate(d)
      }
    
      const selectStartDate = d => {
        setRangeStart(d)
      }
    
      const selectEndDate = d => {
        setRangeEnd(d)
      }

  return (
    <>
      <div className="account-index">
        <div className="container">
          <div className="row">
            <h1>Account</h1>
            <div className="account-list col-lg-3">
              <nav>
                <div className="account-management">
                  <Link className="profile-item">
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.954 14.986a5.735 5.735 0 015.731 5.514l.004.22v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a4.235 4.235 0 00-4.023-4.23l-.212-.004h-9.97a4.235 4.235 0 00-4.229 4.023l-.005.211v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a5.735 5.735 0 015.515-5.73l.22-.004h9.97zM11.97.031a5.735 5.735 0 100 11.47 5.735 5.735 0 000-11.47zm0 1.5a4.235 4.235 0 110 8.47 4.235 4.235 0 010-8.47z"></path>
                    </svg>
                    <span>Profile</span>
                  </Link>
                  <Link className="profile-item" to={'../account/saved-bld'}>
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.645 11.822C23.645 5.348 18.378 0 11.823 0 5.34 0 0 5.27 0 11.822c0 6.505 5.29 11.823 11.822 11.823 6.498 0 11.823-5.284 11.823-11.822zm-12.59 3.265a3.35 3.35 0 01-2.504-4.002 3.35 3.35 0 014.043-2.526 3.35 3.35 0 012.485 4.065 3.351 3.351 0 01-4.025 2.463zm9.662 2.192L16.5 12.584a4.734 4.734 0 00-.257-2.474h5.875a10.39 10.39 0 01-1.401 7.17zm1.073-8.555h-6.38a4.724 4.724 0 00-1.353-1.08l4.354-3.91a10.47 10.47 0 013.38 4.99zm-4.538-5.812L12.545 7.14a4.728 4.728 0 00-2.48.28V1.537a10.38 10.38 0 017.187 1.375zM8.68 1.875v6.4a4.72 4.72 0 00-1.053 1.344L3.713 5.26a10.506 10.506 0 014.966-3.386zM2.894 6.423l4.239 4.72a4.737 4.737 0 00.287 2.438H1.537c-.414-2.4.013-4.95 1.357-7.158zm-1.017 8.543h6.399c.38.43.823.775 1.315 1.038l-4.354 3.909a10.507 10.507 0 01-3.36-4.947zm4.519 5.769l4.708-4.229a4.74 4.74 0 002.431-.263v5.873a10.367 10.367 0 01-7.14-1.381zm8.525 1.048V15.41a4.733 4.733 0 001.066-1.324l3.905 4.348a10.513 10.513 0 01-4.971 3.35z"></path>
                      <path d="M2.078 2.863a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zm19.535 0a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zM2.078 22.583a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032zm19.535 0a1.016 1.016 0 100-2.032 1.016 1.016 0 000 2.032z"></path>
                    </svg>{" "}
                    <span>Saved Builds</span>
                  </Link>
                  <Link className="profile-item">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="1em"
                      height="1em"
                    >
                      <style></style>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>{" "}
                    <span>Order History</span>
                  </Link>
                </div>
              </nav>
            </div>
            <div className="account-body col-lg-9">
                <div className="account-wrapper">
                    <h2>Profile</h2>
                    <div className="account-profile">
                        <div className="profile-icon">
                            <svg class="h-full w-full text-nzxt-volt-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                        <Form>
                            <Form.Group className="mb-3 form-item" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3 form-item" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3 form-item" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3 form-item" controlId="exampleForm.ControlInput1">
                                <Form.Label>Preferred pronouns</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3 form-item" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3 form-item" controlId="exampleForm.ControlInput1">
                                <Form.Label>Birthday</Form.Label>
                                <DatePicker
                                id="exampleForm.ControlInput1"
                                className="form-control"
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                onChange={selectDateHandler} 
                                minDate={today}
                                todayButton={"Today"}/>
                            </Form.Group>
                            <Form.Group className="mb-3 form-item checkbox" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location</Form.Label>
                            <Form.Select aria-label="Default select example">
                            <option value="1">North America</option>
                            <option value="2">Europe</option>
                            <option value="3">Oceania</option>
                            <option value="4">United Kingdom</option>
                            </Form.Select>
                            </Form.Group>
                            <div className="item-check">
                                <Checkbox className="checkbox-index" color="secondary">
                                    <span className="remember-text">
                                    Sign up for emails to get updates from NZXT on
                                    products,BLD,and CAM
                                    </span>
                                </Checkbox>
                            </div>
                            <button className="password-btn">
                                Change Password
                            </button>
                            <div className='btn-main'>
                                <button className='btn-default'>Save</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
