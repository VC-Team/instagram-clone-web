import React, { useState } from 'react'
import "./style.scss"
import {
    FaSearch,
    FaTelegramPlane,
    FaRegCompass,
    FaRegHeart
} from "react-icons/fa"
import { MdHome } from "react-icons/md"

import ModelLogin from '@components/commons/modelLogin'

const DefaultLayout = (props) => {
    console.log(props);

    const [ visible, setVisible ] = useState(false);

    const onpenForm = () => {
        setVisible(true)
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar__first">
                    <div className="navbar__first-logo">
                        <img src="/images/logo_header.png" alt="logo" />
                    </div>
                </div>
                <div className="navbar__middle">
                    <div className="navbar__middle-search">
                        <FaSearch className="searchIcon" />
                        <input type="text" className="nav__search" placeholder="Search" />
                    </div>
                </div>
                <div className="navbar__last">
                    <li>
                        <MdHome className="navbar__icons" />
                    </li>
                    <li>
                        <FaTelegramPlane className="navbar__icons" />
                    </li>
                    <li>
                        <FaRegCompass className="navbar__icons" />
                    </li>
                    <li>
                        <FaRegHeart className="navbar__icons" />
                    </li>
                    {
                        false ? <div className="header-avatar">
                            <img src="https://i.pinimg.com/236x/59/ff/51/59ff51e62283d9e7b6429b451d48c85a.jpg" /></div> : <li onClick={onpenForm}>Register/Login</li>
                    }

                </div>
                {
                    visible && <ModelLogin visible={visible} setVisible={setVisible} />
                }
            </div>
            <div className="container">
                {props.children}
            </div>
        </>

    )
}

export default DefaultLayout