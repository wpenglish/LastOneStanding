import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

import GameContainer from "./GameContainer"
import Data from "./Data"
import './style.css'
import header from "./header2.png"

window.$itemList = ''

function App(){

    return(
        <main>
            <img src={header} className='header'></img>
            <h1 style={{"color":"white"}}>Git test</h1>
            <Switch>
                <Route path='/LastOneStanding' component={Data} exact/>
                <Route path='/LastOneStanding/game' component={GameContainer} />
            </Switch>
        </main>
    )
}

export default App
