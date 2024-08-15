function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];
    
    //create game board
    for (let i=0;i<rows;i++){
        board[i]=[];
        for (let j=0; j<columns; j++){
                //board[i][j]
                board[i].push(Cell());
        };
    };

    return {
        board,
    }
};

function Cell(){
    let value = 0;

    const addMark = (player) => {
        value = player; // either 1 or 2 (x/o)
    };

    const getValue = () => value;

    return {
        addMark,
        getValue,
    };
};

function Controller(){
    // 1 - create the board
    const board = Gameboard();

    // 2 - create two players
    const players = [
        {
            name: 'PlayerOne',
            mark: 'X',
        },
        {
            name:'PlayerTwo',
            mark: 'O',
        }
    ];
    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
      };

    // 3 - play a round
    const playRound = () => {
        // 3a - active player gets to add their mark
        addMark(row,column);
        // 3b - check if win condition for either player has been achieved
        
        // 3c - next player's turn
        switchPlayerTurn();
    };

    return{
        switchPlayerTurn,
        playRound,
    }
};