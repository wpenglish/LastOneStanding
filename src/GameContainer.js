import React, { useState } from "react"
import ReactDOM from "react-dom"

import App from "./App"
import './style.css'
import header from "./header2.png"
import GameController from "./components/GameController"

function GameContainer(){

    const [lastCardKilled, setLastCardKilled] = useState("")
    const [lastCardSaved, setLastCardSaved] = useState("")

    return(
        <div className='appContainer'>
            <div className='prev'>
                <div className='killed'>
                    <h1 style={{"text-align": "center"}}>Last game killed<br /> {lastCardKilled}</h1>
                </div>
                <div className='saved'>
                    <h1 style={{"text-align": "center"}}>Last game saved<br /> {lastCardSaved}</h1>
                </div>
            </div>
            <div className="app">
                <GameController changeKilledText={setLastCardKilled} changeSavedText={setLastCardSaved} />
            </div>
        </div>
    )
}


export default GameContainer
