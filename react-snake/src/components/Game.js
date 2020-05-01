import React, {Component } from 'react';
import Cells from '../components/Cells'
import { START, BODY, FOOD, KEYS, COLS } from '../const';
import '../style.css';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state ={
            board:[],
            snake: [],
            direction: null,
            gameOver: false,
        };

        this.start = this.start.bind(this);
        this.frame = this.frame.bind(this);
    }

    componentDidMount() {
        this.start();
    }

    start() {
        const board = [];
        const snake = [START];
        board[START] = BODY;

        this.setState({
            board,
            snake,
            direction: KEYS.right
        }, () => {
            this.frame();
        });
    }
    
    frame() {
        this.getNextIndex(44)
    }

    getNextIndex (head, direction) {
        let x = head % COLS;
        let y = Math.floor(head/COLS);

        switch(direction){
            case KEYS.up: 
        }
    }

    render() {
        return(
        <Cells/>
        )
    }
}

export default Game;