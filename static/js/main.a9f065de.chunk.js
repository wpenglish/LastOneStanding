(this["webpackJsonpgame-app"]=this["webpackJsonpgame-app"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/header2.fd32260c.png"},16:function(e,a,t){},23:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),i=t(8),c=t(1),m=t(10),o=(t(16),t(12)),d=t.n(o),u=t(18),h=t(19),p=t(22),g=t(21),C=function(e){var a=e.id,t=e.otherGameID,n=e.name,r=e.down,s=e.handleClick;return l.a.createElement("div",{className:"choice"},l.a.createElement("button",{onClick:function(){return s(a,t,r)}},n))},w=function(e){var a=e.handleClose,t=e.show,n=(e.children,e.gameOne),r=e.gameOneID,s=e.gameTwoID,i=e.handleClickChoice,c=t?"choiceCard display-block":"choiceCard display-none";return l.a.createElement("div",{className:c},l.a.createElement("section",{className:"choiceCard-main"},l.a.createElement("h2",{style:{"font-family":"Arial"}},"Which game would you like to save"),l.a.createElement(C,{id:r,otherGameID:s,name:n,down:!1,handleClick:i}),l.a.createElement(C,{id:r,otherGameID:s,name:"Unknown Game",down:!0,handleClick:i}),l.a.createElement("button",{onClick:a}," Close ")))},E=function(e){e.handleClose;var a=e.show,t=(e.children,e.gameOne),n=e.gameOneID,r=e.gameTwoID,s=e.gameTwo,i=e.handleClickChoice,c=a?"choiceCard display-block":"choiceCard display-none";return l.a.createElement("div",{className:c},l.a.createElement("section",{className:"choiceCard-main"},l.a.createElement(C,{id:n,otherGameID:r,name:t,down:!1,handleClick:i}),l.a.createElement(C,{id:r,otherGameID:n,name:s,down:!0,handleClick:i})))};var f=function(e){return l.a.createElement("div",{className:"cardContainer"},l.a.createElement("button",{className:"card",onClick:function(){return e.handleClick(e.name,e.id)}},l.a.createElement("h1",null,e.name)),l.a.createElement("div",{className:"cardOutline"}))},v=function(e){e.handleClose;var a=e.show,t=(e.children,e.name),n=a?"choiceCard display-block":"choiceCard display-none";return l.a.createElement("div",{className:n},l.a.createElement("section",{className:"choiceCard-main"},l.a.createElement("h1",null,t)))},k=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={show:!1,refresh:"",gameOne:"",gameOneID:"",gameTwo:"",gameTwoID:"",lastGameSaved:"",lastGameKilled:"",lastGameKilledCard:"",lastGameKilledSaved:!1,shuffle:!1,vote:!1,winShow:!1,winner:""},n.upCards=[],n.downCards=[],n.list=[],n.showChoiceEvent=function(e,a){n.setState({show:!0,gameOne:e,gameOneID:a,gameTwoID:"1"})},n.hideChoiceEvent=function(){n.setState({show:!1})},n.showFinalVote=function(e,a,t,l){n.setState({vote:!0,gameOne:e,gameOneID:a,gameTwoID:l,gameTwo:t})},n.hideFinalVote=function(e){n.setState({vote:!1,winShow:!0,winner:e})},n.constructDeck=function(){for(var e=window.$itemList.split("\n"),a=0;a<e.length;a++){var t=[];t.push(e[a]),t.push(a),n.list.push(t)}n.gameCards=n.list.map((function(e){return l.a.createElement(f,{key:e[1],id:e[1],name:e[0],handleClick:n.showChoiceEvent})}))},n.shuffleNewDeck=function(){for(var e=n.gameCards.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),t=[n.gameCards[a],n.gameCards[e]];n.gameCards[e]=t[0],n.gameCards[a]=t[1]}if(n.gameCards.length%2===0){var l=Math.ceil(n.gameCards.length/2);n.upCards=n.gameCards.splice(0,l),n.downCards=n.gameCards.splice(-l)}else{var r=Math.floor(n.gameCards.length/2);n.upCards=n.gameCards.splice(0,r),n.downCards=n.gameCards.splice(-r)}n.gameCards=n.gameCards.map((function(e){return e})),n.setState({refresh:"true"})},n.removeGames=function(e,a,t){if(t){var l=n.downCards.splice(n.downCards.findIndex((function(e){return e.key==a})),1)[0];n.gameCards.push(l),n.downCards=n.downCards.map((function(e){return e})),n.gameCards=n.gameCards.map((function(e){return e}));var r=n.upCards.splice(n.upCards.findIndex((function(a){return a.key==e})),1)[0];n.props.changeKilledText(r.props.name),n.props.changeSavedText(l.props.name),n.setState({lastGameKilled:r.props.name,lastGameKilledCard:r,lastGameKilledSaved:!1}),n.upCards=n.upCards.map((function(e){return e}))}else{var s=n.upCards.splice(n.upCards.findIndex((function(a){return a.key==e})),1)[0];n.gameCards.push(s),n.upCards=n.upCards.map((function(e){return e})),n.gameCards=n.gameCards.map((function(e){return e}));var i=n.downCards.splice(n.downCards.findIndex((function(e){return e.key==a})),1)[0];n.props.changeKilledText(i.props.name),n.props.changeSavedText(s.props.name),n.setState({lastGameKilled:i.props.name,lastGameKilledCard:i,lastGameKilledSaved:!1}),n.downCards=n.downCards.map((function(e){return e}))}0===n.downCards.length&&n.handleNewShuffle(),n.hideChoiceEvent()},n.saveLastKill=function(){n.state.lastGameKilledSaved||(n.gameCards.push(n.state.lastGameKilledCard),n.setState({lastGameKilledSaved:!0})),console.log(n.gameCards)},n.handleNewShuffle=function(){n.gameCards.length<=2?(n.props.changeRound("Final"),n.finalVote(n.gameCards)):(n.props.changeRound(n.props.round+1),n.shuffleNewDeck())},n.finalVote=function(){console.log("Final Vote"),n.showFinalVote(n.gameCards[0].props.name,n.gameCards[0].props.id,n.gameCards[1].props.name,n.gameCards[1].props.id)},n.showWinningCard=function(e){var a=n.gameCards[n.gameCards.findIndex((function(a){return a.key==e}))].props.name;n.hideFinalVote(a)},n.constructDeck(),n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){console.log("I mounted"),this.shuffleNewDeck()}},{key:"render",value:function(){return l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"gameCards"},this.upCards),l.a.createElement(w,{show:this.state.show,handleClose:this.hideChoiceEvent,gameOne:this.state.gameOne,gameOneID:this.state.gameOneID,handleClickChoice:this.removeGames}),l.a.createElement(E,{show:this.state.vote,handleClose:this.hideFinalVote,gameOne:this.state.gameOne,gameOneID:this.state.gameOneID,gameTwo:this.state.gameTwo,gameTwoID:this.state.gameTwoID,handleClickChoice:this.showWinningCard}),l.a.createElement(v,{show:this.state.winShow,name:this.state.winner}))}}]),t}(l.a.Component);var N=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),c=i[0],o=i[1],d=Object(n.useState)(0),u=Object(m.a)(d,2),h=u[0],p=u[1],g=Object(n.useState)("5"),C=Object(m.a)(g,2),w=C[0],E=C[1];return l.a.createElement("div",{className:"appContainer"},l.a.createElement("div",{className:"prev"},l.a.createElement("div",{className:"round"},l.a.createElement("h1",{style:{"text-align":"center",margin:"10px 0 10px 0"}},"Round",l.a.createElement("br",null)," ",h)),l.a.createElement("div",{className:"playerTurn"},l.a.createElement("h1",{style:{"text-align":"center",margin:"10px 0 10px 0"}},"Player's Turn",l.a.createElement("br",null)," ",w)),l.a.createElement("div",{className:"killed"},l.a.createElement("h1",{style:{"text-align":"center"}},"Last game killed",l.a.createElement("br",null)," ",t)),l.a.createElement("div",{className:"saved"},l.a.createElement("h1",{style:{"text-align":"center"}},"Last game saved",l.a.createElement("br",null)," ",c))),l.a.createElement("div",{className:"app"},l.a.createElement(k,{changeKilledText:r,changeSavedText:o,changeRound:p,changePlayerTurn:E,round:h})))};var b=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"dataDiv"},l.a.createElement("div",{className:"inside"},l.a.createElement("textarea",{id:"itemsArea",placeholder:"Put items here..."}),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/game"},l.a.createElement("button",{className:"dataSubmit",onClick:function(){window.$itemList=document.getElementById("itemsArea").value,console.log(window.$itemList)}},"Submit"))),l.a.createElement("div",{className:"inside2"},l.a.createElement("h3",{className:"info",style:{"margin-top":"0px"}},"To input a list of items, put each item on a single line without anything else. Each line will count as a item. Even a blank one.",l.a.createElement("br",null),l.a.createElement("br",null),"  It may include punctuation but they will be included in the view when playing the game. Here is an example on how to input the items:"),l.a.createElement("p",{className:"item"},"The Legend of Zelda"),l.a.createElement("p",{className:"item"},"Super Mario Bros."),l.a.createElement("p",{className:"item"},"Super Metroid"),l.a.createElement("p",{className:"item"},"Kirby Super Star"),l.a.createElement("p",{className:"item"},"Donkey Kong Country"),l.a.createElement("p",{className:"item"},"A Short Hike"),l.a.createElement("h3",{className:"info"},"Once you have all the items you want to include, hit submit and the game will start"))),l.a.createElement("div",{className:"rulesDiv"},l.a.createElement("div",{className:"rules"},l.a.createElement("h1",null,"Rules"))))};window.$itemList="";var y=function(){return l.a.createElement("main",null,l.a.createElement("img",{src:d.a,className:"header"}),l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/LastOneStanding",component:b}),l.a.createElement(c.a,{path:"/game",component:N})))};s.a.render(l.a.createElement(i.a,null,l.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a9f065de.chunk.js.map