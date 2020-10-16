import React from "react"

import Card from "./Card"
import gameData from "../gameData"

function Deck(props){

    const gameCards = gameData.map(game => {
        return(<Card key={game.id} name={game.name} comp={game.comp} handleClick={props.choiceEvent}/>)
    })

    return(
        <div>
            {gameCards}
        </div>
    )
}

export default Deck
