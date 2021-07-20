import React from 'react'
import './Card.css'

function Card(props) {

    return (
            <div className="card">
                <img className="card-img" src={props.src} alt="avatar" />
                <h4 className="card-name">{props.name} </h4>
                <p className="card-mail"><i class="fas fa-envelope"></i> {props.mail} </p>
                <button className="more">Know More</button>
            </div>
    )
}

export default Card
