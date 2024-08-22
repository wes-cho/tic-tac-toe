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

    const reset = () => {
        for (let i=0; i<9; i++){
            Gameboard.addMark(i, "");
        }
        Gameboard.render();
        currentPlayerIndex= 0;
    }

    const squareClick = (event) => {
        let index = parseInt(event.target.id.split('-')[1]);
        
        if (Gameboard.getBoard()[index] === ""){
            Gameboard.addMark(index, players[currentPlayerIndex].mark);
            currentPlayerIndex = (currentPlayerIndex === 0) ? 1 : 0;
        } else{
            return;
        }

        if(checkWin(Gameboard.getBoard(), players[currentPlayerIndex].mark)){
            gameOver = true;
            alert(`${players[currentPlayerIndex].name} won!`);
        } else if (checkTie(Gameboard.getBoard())){
            gameOver = true;
            alert("It's a tie!")
        }

    };

    function checkWin(board){
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i=0; i<winConditions.length; i++){
            const [a,b,c] = winConditions[i]
            if (board[a] != ""  && board[a] === board[b] && board[a] === board[c]){
                return true;
            } 
        }
        return false;
    };

    function checkTie(board){
        return board.every(cell => cell !== "");
    }

    return{
        start,
        reset,
        squareClick,
    }
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    Controller.start();
    
});

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    Controller.reset();
})
