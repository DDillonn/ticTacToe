import React, { Component } from "react";

import "../styles/index.css"
import Announcement from './Announcement'
import ResetButton from './ResetButton'
import Tile from '/Tile'


//create your first component
const Game = () => {
	constructor() {
		super()
		this.state = {
			gameBoard: [
				' ', ' ', ' ',
				' ', ' ', ' ',
				' ', ' ', ' '
			]
		}
	}
	render () {
	return (
		<div className="container">
			<div className="menu">
				<h1>Tic-Tac-Toe</h1>
				<Announcement />
				<ResetButton />
				
			</div>
			{this.state.gameBoard.map(function(value, i){
				<Tile />
			})}
		</div>
		
		);
	}
}

	

export default Game;
