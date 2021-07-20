import React from 'react'
import './Main.css'

function Main(props) {
    return (
        <div className="main-wrapper">
            <div className="main">
                <div className="main-card">
                    Speciality 
                    <p>Lorem ipsum dolar </p>
                </div>
                <div className="main-card">
                    Features
                    <p>Lorem ipsum dolar </p>
                </div>
                <div className="main-card">
                    Goals
                    <p>Lorem ipsum dolar </p>
                </div>
            </div>
            <div className="getUsers">
                <button onClick={props.click}>Get Users</button>
            </div>
        </div>
    )
}

export default Main
