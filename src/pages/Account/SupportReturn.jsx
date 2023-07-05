import React from "react";
import "../../styles/account.css";
import "../../styles/support-return.css";
import { Link } from "react-router-dom";
import nzxtCam from '../../assets/images/thumbnail/nzxtCam.png'


const SavedBuild = () => {

  return (
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
              <Link className="profile-item">
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
              <Link className="profile-item">
              <svg viewBox="0 0 64 64" width="1em" height="1em"><path d="M32 7C18.2 7 7 18.2 7 32s11.2 25 25 25 25-11.2 25-25S45.8 7 32 7zm-3 20h6v18h3v4H26v-4h3V31h-3v-4h3zm3-4c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="currentColor"></path></svg>
                <span>Support Returns</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="account-body col-lg-9">
        <h2 className="title">Support + Returns</h2>
            <div className="account-wrapper">
              <div className="support-main">
                 <p>If you require any help or are looking to return an item, please contact support.</p> 
                        <div className='btn-main'>
                                <button className='btn-default'>Create Support Request</button>
                        </div> 
                        <div className="space">
                            <h3>Active Tickets</h3>
                            <p>You have no active support requests</p>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SavedBuild