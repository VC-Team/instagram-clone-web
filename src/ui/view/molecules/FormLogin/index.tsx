import React from 'react'
import classes from "@view/molecules/FormLogin/style.module.scss"
import Input from '@view/atoms/Input'
import Button from '@view/atoms/Button'
const FormLogin = () => {
    return (
        <form className={classes[ "login-form" ]}>
            <div className={classes[ "field" ]}>
                <Input id="username"
                    name="username"
                    type="text"
                    placeholder="Phone number, username, or email" />
                <label htmlFor="username">Phone number, username, or email</label>
            </div>
            <div className={classes[ "field" ]}>
                <Input id="password" name="password" type="password" placeholder="password" />
                <label htmlFor="password">Password</label>
            </div>
            <button className={classes[ "login-button" ]} title="login">Log In</button>
            <div className={classes[ "separator" ]}>
                <div className={classes[ "line" ]}></div>
                <p>OR</p>
                <div className={classes[ "line" ]}></div>
            </div>
            <div className={classes[ "other" ]}>
                <button className={classes[ "fb-login-btn" ]} type="button">
                    <i className="fa fa-facebook-official fb-icon"></i>
                    <span className={classes[ "" ]}>Log in with Facebook</span>
                </button>
                <a className={classes[ "forgot-password" ]} href="#">Forgot password?</a>
            </div>
        </form>
    )
}

export default FormLogin
