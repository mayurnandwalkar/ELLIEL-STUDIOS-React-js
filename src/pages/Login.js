import React from 'react'
import EllielLogo from '../images/Elliel-logo-pink.png'
const Login = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="section_half-half wf-section">
                    <div className="wrap_50-p">
                        <a href="#" className="navbar-logo-link w-nav-brand">
                            <img src={EllielLogo} loading="lazy" alt="" className="logo-img" /></a>
                        <div className="content-wrap_center _100-p-width">
                            <div className="form-wrapper left-align">
                                <h1 className="h1_small">Login</h1>
                                <div className="block_form w-form">
                                    <form id="wf-form-login" name="wf-form-login" data-name="login" method="get" data-ms-form="login" className="form-container">
                                        <div className="input-wrapper"><label for="Email-5" className="input-label">Email</label>
                                            <input type="email" className="input w-input" maxlength="256" name="Email-5" data-name="Email 5" placeholder="e.g. your.email@gmail.com" id="Email-5" required="" />
                                        </div>
                                        <div className="input-wrapper"><label for="Password-4" className="input-label">Password</label>
                                            <input type="password" className="input w-input" maxlength="256" name="Password-4" data-name="Password 4" placeholder="" id="Password-4" required="" />
                                        </div>
                                        <div className="flex-row_outer margin-bottom">
                                            <div className="block_relative">
                                                <a href="#" className="link">Forgot password?</a>
                                            </div>
                                        </div>
                                        <input type="submit" value="Log In" data-wait="Please wait..." className="button in-form w-button" />
                                    </form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                                <div className="flex-row_center">
                                    <div className="faint-text">Need an account? <a href="#" className="link">Sign up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="spacer_xl"></div>
                        </div>
                        <div>Copyright © 2023 ELLIEL STUDIOS.</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login