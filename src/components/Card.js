import React from "react"

function Card(props){
    return(
        <div className='cardContainer'>
            <button className="card" onClick={() => props.handleClick(props.name, props.id)}>
                <h1>{props.name}</h1>
            </button>
            <div className='cardOutline'></div>
        </div>
    )
}

export default Card
