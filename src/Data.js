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
                    <input type="number" step="1" placeholder="How many players?" id="playerArea" min="2" max="20"></input>
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
                <div className="rules"><p>You will input a list. It can be anything, but is typically a list of you favorites things for a category. You will then input how many players there will be. Once you click Submit, the game will start.<br /><br />The list will be put into a "deck" and then the cards will split into pairs. One card will be shown or "face up" and the other card will not be shown or "face down".<br /><br />The way a turn works is one player will choose a pair for another player. The player whose didn't choose the pair will then get to decide whether they want to save the face up card or save the face down card. Which ever card they don't save will be killed. The game keeps going until there is only one card left. The final 2 cards will be taken to a vote by everyone. Each player gets to save one card that was killed but only immediately after it was killed.<br /><br />This game and rules were taken by Easy Allies and this video: https://www.youtube.com/watch?v=uB_pvw7FU6I. If you want a better explantion of the rules, watch the video.</p></div>
            </div>
        </div>
    )
}


export default Data
