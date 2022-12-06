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
    return {boardStatus}
})();

 