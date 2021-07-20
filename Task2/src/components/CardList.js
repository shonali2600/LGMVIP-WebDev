import React from 'react'
import Card from './Card'
import './Card.css'

function CardList(props) {
    return (
        <div className="card-body">
            <div className="card-wrapper">
                {
                    props.users.map((curEle) => {
                        return (
                            <Card
                                key={curEle.id}
                                name={curEle.first_name + " " + curEle.last_name}
                                src={curEle.avatar}
                                mail={curEle.email}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardList
