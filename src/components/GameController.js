import React from "react"

import ChoiceEvent from "./ChoiceEvent"
import FinalVote from "./FinalVote"
import Card from "./Card"
import gameData from "../gameData"
import WinScreen from "./Winning.js"

class GameController extends React.Component{
    constructor(props) {
        super(props)
        this.constructDeck()
    }

    state = { show: false,
        refresh: "",
        gameOne: "",
        gameOneID: "",
        gameTwo: "",
        gameTwoID: "",
        lastGameSaved: "",
        lastGameKilled: "",
        lastGameKilledCard: "",
        lastGameKilledSaved: false,
        shuffle: false,
        vote: false,
        winShow: false,
        winner: ""
    }

    upCards=[]
    downCards=[]
    list = []
    gameCards

    showChoiceEvent = (gameName, gameID) => {
      this.setState({ show: true, gameOne: gameName, gameOneID: gameID, gameTwoID: "1"});
    }

    hideChoiceEvent = () => {
      this.setState({ show: false });
    }

    showFinalVote = (gameName, gameID, gameNameTwo, gameIDTwo) => {
      this.setState({ vote: true, gameOne: gameName, gameOneID: gameID, gameTwoID: gameIDTwo, gameTwo: gameNameTwo});
    }

    hideFinalVote = (name) => {
      this.setState({ vote: false, winShow: true, winner: name});
    }

    constructDeck = () => {
        let items = window.$itemList.split('\n')
        for (let index = 0; index < items.length; index++){
            let temp = []
            temp.push(items[index])
            temp.push(index)
            this.list.push(temp)
        }
        this.gameCards = this.list.map(game => {
            return(<Card key={game[1]} id={game[1]} name={game[0]} handleClick={this.showChoiceEvent}/>)
        })
    }


    shuffleNewDeck = () => {
        for (let i = this.gameCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.gameCards[i], this.gameCards[j]] = [this.gameCards[j], this.gameCards[i]];
        }

        if(this.gameCards.length % 2 === 0 ){
            const half = Math.ceil(this.gameCards.length / 2);
            this.upCards = this.gameCards.splice(0, half)
            this.downCards = this.gameCards.splice(-half)
        }
        else{
            const half = Math.floor(this.gameCards.length / 2);
            this.upCards = this.gameCards.splice(0, half)
            this.downCards = this.gameCards.splice(-half)
        }

        this.gameCards = this.gameCards.map(game => {
            return(game)
        })
        this.setState({ refresh: "true" });
    }

    removeGames = (gameOne, gameTwo, down) => {
        if(down){
            const gameSaved = this.downCards.splice(this.downCards.findIndex(p => p.key == gameTwo), 1)[0]
            this.gameCards.push(gameSaved)

            this.downCards = this.downCards.map(game => {
                return(game)
            })

            this.gameCards = this.gameCards.map(game => {
                return(game)
            })

            const gameKilled = this.upCards.splice(this.upCards.findIndex(p => p.key == gameOne), 1)[0]
            this.props.changeKilledText(gameKilled.props.name)
            this.props.changeSavedText(gameSaved.props.name)

            this.setState({lastGameKilled: gameKilled.props.name, lastGameKilledCard: gameKilled, lastGameKilledSaved: false});
            this.upCards = this.upCards.map(game => {
                return(game)
            })
        }
        else {
            const gameSaved = this.upCards.splice(this.upCards.findIndex(p => p.key == gameOne), 1)[0]
            this.gameCards.push(gameSaved)

            this.upCards = this.upCards.map(game => {
                return(game)
            })

            this.gameCards = this.gameCards.map(game => {
                return(game)
            })

            const gameKilled =  this.downCards.splice(this.downCards.findIndex(p => p.key == gameTwo), 1)[0]
            this.props.changeKilledText(gameKilled.props.name)
            this.props.changeSavedText(gameSaved.props.name)
            this.setState({lastGameKilled: gameKilled.props.name, lastGameKilledCard: gameKilled, lastGameKilledSaved: false});
            this.downCards = this.downCards.map(game => {
                return(game)
            })
        }
        if(this.downCards.length === 0){
            this.handleNewShuffle()
        }

        this.hideChoiceEvent()
    }

    saveLastKill = () => {
        if(!this.state.lastGameKilledSaved){
            this.gameCards.push(this.state.lastGameKilledCard)
            this.setState({lastGameKilledSaved: true})
        }
        console.log(this.gameCards)
    }

    handleNewShuffle = () =>{
        if(this.gameCards.length <= 2){
            this.props.changeRound("Final")
            this.finalVote(this.gameCards)
        }
        else{
            this.props.changeRound(this.props.round + 1)
            this.shuffleNewDeck()
        }
    }

    finalVote = () =>{
        console.log("Final Vote")
        this.showFinalVote(this.gameCards.[0].props.name, this.gameCards.[0].props.id, this.gameCards.[1].props.name, this.gameCards.[1].props.id)
    }

    showWinningCard = (winID) =>{
        const name = this.gameCards[this.gameCards.findIndex(p => p.key == winID)].props.name
        this.hideFinalVote(name)
    }

    componentDidMount(){
        console.log("I mounted")
        this.shuffleNewDeck()
    }

    render(){
        return(
            <div className='game'>
                <div className='gameCards'>
                    {this.upCards}
                </div>
                <ChoiceEvent show={this.state.show} handleClose={this.hideChoiceEvent} gameOne={this.state.gameOne} gameOneID={this.state.gameOneID} handleClickChoice={this.removeGames}/>
                <FinalVote show={this.state.vote} handleClose={this.hideFinalVote} gameOne={this.state.gameOne} gameOneID={this.state.gameOneID} gameTwo={this.state.gameTwo} gameTwoID={this.state.gameTwoID} handleClickChoice={this.showWinningCard}/>
                <WinScreen show={this.state.winShow} name={this.state.winner}/>

            </div>
        )
    }
}

export default GameController
