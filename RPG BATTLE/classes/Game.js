export default class Game {

    turn
    currentPlayer
    players
    over

    constructor(turn, currentPlayer, players){
        this.turn = turn
        this.currentPlayer = currentPlayer
        this.players = players
        this.over = false
    }

    getTurn(){
        return this.turn;
    }
    newTurn(){
        this.turn++;
    }

    getCurrentPlayer(){
        return this.currentPlayer;
    }

    setCurrentPlayer(player){
        this.currentPlayer = player
    }

    getOver(){
        return this.over
    }

    endGame(){
        this.over = true;
    }

    getPlayers(){
        return this.players
    }

  }