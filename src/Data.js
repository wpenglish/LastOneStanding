import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router-dom';

function Data(){

    const saveList = () =>{
        window.$itemList = document.getElementById("itemsArea").value
        console.log(window.$itemList)
    }

    return(
        <div>
            <textarea id="itemsArea" rows="4" cols="50"></textarea>
            <br/>
            <Link to="/game">
                <button className="dataSubmit" onClick={saveList}>Submit</button>
            </Link>
        </div>
    )
}


export default Data
