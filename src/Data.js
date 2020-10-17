import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router-dom';

function Data(){

    const saveList = () =>{
        window.$itemList = document.getElementById("itemsArea").value
        window.$playerNum = document.getElementById("playerArea").value
        console.log(window.$playerNum)
    }

    return(
        <div>
            <div className="dataDiv">
                <div className="inside">
                    <textarea id="itemsArea" placeholder="Put items here..."></textarea>
                    <input type="number" step="1" placeholder="How many players?" id="playerArea" min="1" max="20"></input>
                    <br/>
                    <Link to="/game">
                        <button className="dataSubmit" onClick={saveList}>Submit</button>
                    </Link>
                </div>
                <div className="inside2">
                    <h3 className="info" style={{"margin-top":"0px"}}>To input a list of items, put each item on a single line without anything else. Each line will count as a item. Even a blank one.<br /><br />  It may include punctuation but they will be included in the view when playing the game. Here is an example on how to input the items:</h3>
                    <p className="item">The Legend of Zelda</p>
                    <p className="item">Super Mario Bros.</p>
                    <p className="item">Super Metroid</p>
                    <p className="item">Kirby Super Star</p>
                    <p className="item">Donkey Kong Country</p>
                    <p className="item">A Short Hike</p>
                    <h3 className="info">Once you have all the items you want to include, hit submit and the game will start</h3>
                </div>
            </div>
            <div className="rulesDiv">
                <div className="rules"><h1>Rules</h1></div>

            </div>
        </div>
    )
}


export default Data
