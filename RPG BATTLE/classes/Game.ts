class Game {

    turn: number
    currentPlayer: number
    players: Array<Player>
    over: boolean

    constructor(turn: number, currentPlayer: number, players: Array<Player>){
        this.turn = turn
        this.currentPlayer = currentPlayer
        this.players = players
        this.over = false
    }
  }

