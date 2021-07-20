import React from 'react'
import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <header>
                <div className="title">
                    <div>Chatter</div>
                    <i className="fab fa-accusoft"></i>
                </div>
                <div className="nav">
                    <div className="nav-link">
                        About
                    </div>
                    <div className="nav-link">
                        Contact us
                    </div>
                    <div className="getUsers">
                        <button onClick={props.click}>Get Users</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
