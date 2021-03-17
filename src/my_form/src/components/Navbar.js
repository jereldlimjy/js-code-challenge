import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, isSignedIn, signOut }) => {
    return (
        <div>
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={`/`}>
                    <h1>{title}</h1>
                </Link>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        { isSignedIn ? 
                            <Link to={`/`}>
                                <span onClick={() => signOut()} className="m">Sign Out</span>
                            </Link>
                            :
                            <Fragment>
                                <Link to={`/register`}>
                                    <span className="m">Register</span>
                                </Link>
                                <Link to={`/signin`}>
                                    <span className="m">Sign In</span>
                                </Link>  
                            </Fragment> 
                        }
                    </div> 
            </nav>
            <hr/>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'BTC Wallet'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar