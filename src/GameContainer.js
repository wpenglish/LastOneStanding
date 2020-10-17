import React, { useState } from "react"
import ReactDOM from "react-dom"

import App from "./App"
import './style.css'
import header from "./header2.png"
import GameController from "./components/GameController"

function GameContainer(){

    const [lastCardKilled, setLastCardKilled] = useState("")
    const [lastCardSaved, setLastCardSaved] = useState("")
    const [round, setRound] = useState(0)
    const [playerTurn, setPlayerTurn] = useState(1)

    return(
        <div className='appContainer'>
            <div className='prev'>
                <div className='round'>
                    <h1 style={{"text-align": "center", "margin":"10px 0 10px 0"}}>Round<br /> {round}</h1>
                </div>
                <div className='playerTurn'>
                    <h1 style={{"text-align": "center", "margin":"10px 0 10px 0"}}>Player's Turn<br /> {playerTurn}</h1>
                </div>
                <div className='killed'>
                    <h1 style={{"text-align": "center"}}>Last game killed<br /> {lastCardKilled}</h1>
                </div>
                <div className='saved'>
                    <h1 style={{"text-align": "center"}}>Last game saved<br /> {lastCardSaved}</h1>
                </div>
            </div>
            <div className="app">
                <GameController changeKilledText={setLastCardKilled} changeSavedText={setLastCardSaved} changeRound={setRound} changePlayerTurn={setPlayerTurn} player={playerTurn} round={round}/>
            </div>
        </div>
    )
}


export default GameContainer
