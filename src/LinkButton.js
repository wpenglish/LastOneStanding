import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

import AppContainer from "./AppContainer"

function LinkButton(){


    return(
        <main>
            <Link to="/game">Game</Link>
            <Switch>
                <Route path='/game' component={AppContainer} />
            </Switch>
        </main>
    )
}

export default LinkButton
