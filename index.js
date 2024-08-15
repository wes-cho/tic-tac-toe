function Gameboard(){
    let gameboard = ['','','','','','','','',''];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class='square' id='square-${index}>${square}</div>`
        })
    };

    document.querySelector('#board').innerHTML = boardHTML;

    return{
        render,
    };
};

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    //Game.start();
});
