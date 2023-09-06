let butt1 = document.getElementById("1234");
let player1name = document.getElementById("Player1_name");
let player2name = document.getElementById("Player2_name");
let player1value = document.getElementById("Player1_value");
let player2value = document.getElementById("Player2_value");
let fill_check = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = 1; // 1 for Player1, 2 for Player2

function player(name, value, turns) {
    return { name, value, turns };
}
let player1_turns=0;
let player2_turns=0;
function createGameBoard() {
    const ticTacToe = document.querySelector(".tic-tac-toe");
    for (let i = 0; i < 9; i++) {
        const button = document.createElement("button");
        button.className = "my-button";
        button.value = i;
        button.addEventListener("click", handleButtonClick);
        ticTacToe.appendChild(button);
    }
}
const check = (() => {
    const gameCheck = () => {
        if((fill_check[0] === fill_check[1] && fill_check[1] === fill_check[2]&&fill_check[0]!=-1&&fill_check[1]!=-1&&fill_check[2]!=-1)||(fill_check[0] === fill_check[3] && fill_check[3] === fill_check[6]&&fill_check[0]!=-1&&fill_check[3]!=-1&&fill_check[6]!=-1)||(fill_check[0] === fill_check[4] && fill_check[4] === fill_check[8]&&fill_check[0]!=-1&&fill_check[4]!=-1&&fill_check[8]!=-1))
        {
            return fill_check[0];
        }
        else if((fill_check[3] === fill_check[4] && fill_check[4] === fill_check[5]&&fill_check[3]!=-1&&fill_check[4]!=-1&&fill_check[5]!=-1)||(fill_check[1] === fill_check[4] && fill_check[4] === fill_check[7]&&fill_check[1]!=-1&&fill_check[4]!=-1&&fill_check[7]!=-1))
        {
                return fill_check[3];
        }
        else if((fill_check[6] === fill_check[7] && fill_check[7] === fill_check[8]&&fill_check[6]!=-1&&fill_check[7]!=-1&&fill_check[8]!=-1)||(fill_check[2] === fill_check[5] && fill_check[5] === fill_check[8]&&fill_check[2]!=-1&&fill_check[5]!=-1&&fill_check[8]!=-1))
        {
            return fill_check[6];
        }
        else {
            return -1; // Default return value if no winner yet
        }
    };
    return {
        gameCheck: gameCheck
    };
})();
function handleButtonClick(event) {
    const index = event.target.value;
    let player_turns=document.getElementById("playerturn");
    if (fill_check[index] === -1) { // Check if the cell is empty
        if (currentPlayer === 1) {
            player1_turns++;
            fill_check[index] = 1; // Player1's move
            event.target.textContent = "X";
            currentPlayer = 2; // Switch to Player2's turn
        } else {
            player2_turns++;
            fill_check[index] = 0; // Player2's move
            event.target.textContent = "O";
            currentPlayer = 1; // Switch to Player1's turn
        }

        let winner = check.gameCheck();
        if (winner === 1) {
            player_turns.textContent = player1name.value + " won!";
        } else if (winner === 0) {
            player_turns.textContent = player2name.value + " won!";
        } else if (player1_turns==5||player2_turns==5) {
            player_turns.textContent = "It's a draw!";
        } else {
            player_turns.textContent = currentPlayer === 1 ? player1name.value + "'s turn" : player2name.value + "'s turn";
        }
    }
}

butt1.addEventListener("click", function () {
    createGameBoard();
});

const player_turns = document.getElementById("turns1");


