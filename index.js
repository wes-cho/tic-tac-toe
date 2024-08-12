function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];
    
    //create gameboard
    for (let i=0;i<rows;i++){
        board[i]=[];
        for (let j=0; j<columns; j++){
                //board[i][j]
                board[i].push(Cell());
        }
    };

    console.log(board);
    //allow user to put their mark on a space below
    // ******
};

function Cell(){
    let value = 0;
    const addMark = (playerMark) => {
        value = playerMark; // either 1 or 2 (x/o)
    };

    const getValue = () => value;
    return {
        addMark, 
        getValue,
    };
};

function Controller(){
    const board = Gameboard();
    
    const players = [
        {
            name: 'PlayerOne',
            mark: 1
        },
        {
            name:'PlayerTwo',
            mark: 2
        }
    ];
    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
      };

};