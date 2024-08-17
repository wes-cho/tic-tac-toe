const Gameboard = (()=> {
    let board = ["","","","","","","","",""]

    const render = () => {
        let boardHTML = "";

        board.forEach((square, index) => {
            boardHTML += `<div class='square' id='square-${index}'>${square}</div>`;
                });

        document.querySelector('#board').innerHTML = boardHTML;
    };

    return{
        render,
    };
})();

const createPlayer = (name, mark) => {
    return{
        name,
        mark
    }
};


const Controller = (()=> {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            (createPlayer(document.querySelector('#p1').value), 'X'),
            (createPlayer(document.querySelector('#p2').value), 'O'),
        ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
    };

    return{
        start
    }
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    Controller.start();
    
});

Gameboard.render();