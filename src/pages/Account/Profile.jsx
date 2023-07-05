import React from 'react'
import '../../styles/account.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div className="account-index">
        <div className="container">
            <div className="row">
            <h1>Account</h1>
                <div className="col-lg-3">
                    <nav>
                        <div className="account-management">
                            <Link className="profile-item">
                                <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" class="text-nzxt-volt-400 group-hover:text-nzxt-volt-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"><path d="M16.954 14.986a5.735 5.735 0 015.731 5.514l.004.22v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a4.235 4.235 0 00-4.023-4.23l-.212-.004h-9.97a4.235 4.235 0 00-4.229 4.023l-.005.211v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a5.735 5.735 0 015.515-5.73l.22-.004h9.97zM11.97.031a5.735 5.735 0 100 11.47 5.735 5.735 0 000-11.47zm0 1.5a4.235 4.235 0 110 8.47 4.235 4.235 0 010-8.47z"></path></svg>
                                <span>Profile</span>
                            </Link>
                            <Link className="profile-item">
                                <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" class="text-nzxt-volt-400 group-hover:text-nzxt-volt-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"><path d="M16.954 14.986a5.735 5.735 0 015.731 5.514l.004.22v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a4.235 4.235 0 00-4.023-4.23l-.212-.004h-9.97a4.235 4.235 0 00-4.229 4.023l-.005.211v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a5.735 5.735 0 015.515-5.73l.22-.004h9.97zM11.97.031a5.735 5.735 0 100 11.47 5.735 5.735 0 000-11.47zm0 1.5a4.235 4.235 0 110 8.47 4.235 4.235 0 010-8.47z"></path></svg>
                                <span>Profile</span>
                            </Link>
                            <Link className="profile-item">
                                <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" class="text-nzxt-volt-400 group-hover:text-nzxt-volt-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"><path d="M16.954 14.986a5.735 5.735 0 015.731 5.514l.004.22v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a4.235 4.235 0 00-4.023-4.23l-.212-.004h-9.97a4.235 4.235 0 00-4.229 4.023l-.005.211v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a5.735 5.735 0 015.515-5.73l.22-.004h9.97zM11.97.031a5.735 5.735 0 100 11.47 5.735 5.735 0 000-11.47zm0 1.5a4.235 4.235 0 110 8.47 4.235 4.235 0 010-8.47z"></path></svg>
                                <span>Profile</span>
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    hi
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile