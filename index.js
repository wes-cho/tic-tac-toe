const Gameboard = (()=> {
    let board = ["","","","","","","","",""]

    const getBoard = () => board;

    const render = () => {
        let boardHTML = "";

        board.forEach((square, index) => {
            boardHTML += `<div class='square' id='square-${index}'>${square}</div>`;
            });

        document.querySelector('#board').innerHTML = boardHTML;

        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', Controller.squareClick)
        });
    };

    const addMark = (index, mark) => {
        board[index] = mark;
        render();
    }

    return{
        render,
        addMark,
        getBoard,
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
            (createPlayer((document.querySelector('#p1').value), 'X')),
            (createPlayer((document.querySelector('#p2').value), 'O')),
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', squareClick)
        });
    };

    const squareClick = (event) => {
        let index = parseInt(event.target.id.split('-')[1]);
        
        if (Gameboard.getBoard()[index] === ""){
            Gameboard.addMark(index, players[currentPlayerIndex].mark);
            currentPlayerIndex = (currentPlayerIndex === 0) ? 1 : 0;
        } else{
            return;
        }
    };

    return{
        start,
        squareClick,
    }
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    Controller.start();
    
});
