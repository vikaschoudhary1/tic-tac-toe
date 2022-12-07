const Player = (name, sign) => {
    const myTurn = false;
    const mySign = sign;
    const sayName = () => console.log(name)
    const markPlace = () => {
        this.myTurn = false;
    }
    return {sayName, markPlace, myTurn, mySign}
}

const gameBoard = (() => {
    const boardStatus = [];
    const askName = () => {
        const name = prompt('what is your name');
    }
    const initiateGame = () => {
        const name1 = askName();
        const player1 = Player(name1, 'x');
        const name2 = askName();
        const player2 = Player(name2, '0');
        return player1
    }
    const endGame = () => {

    }
    return {boardStatus, initiateGame, endGame, player1, player2}
})();

 