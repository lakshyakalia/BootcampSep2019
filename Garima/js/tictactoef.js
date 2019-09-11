
const Gameboard = (() => {
  const board = Array(3).fill(Array(3).fill(" "));
  const tiles = [];
  const turn = 0;
  const players = [];
  const gameOver = false;
  const winner = "";
  const boardFilled = false;

  return {
     board,
     tiles,
   players,
      turn,
  gameOver,
  boardFilled,
  winner,
  };
})();


// Factories

const playerFactory = ((number, symbol, name) => {
  const score = 0;
  return {number, symbol, name, score}
})


// Functions

const render = function() {
  const container = document.querySelector(".container");
  let tileIndex = 0;

  Gameboard.tiles = [];
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for(let i = 0; i < Gameboard.board.length; i++) {
    // Create nested array if not already there
    Gameboard.tiles[i] = Gameboard.tiles[i] || [];

    for(let j = 0; j < Gameboard.board[i].length; j++) {
      Gameboard.tiles[i][j] = document.createElement("div");
      let tile = Gameboard.tiles[i][j];

      tile.addEventListener("click", addSymbol);

      tile.setAttribute("data-index", tileIndex++);
      tile.classList.add("tile");
      tile.textContent = tile.textContent || " ";
      container.appendChild(tile);
    }
  }
}

const addSymbol = function() {
  if(this.textContent != " " || Gameboard.gameOver) {
    return;
  }
  let symbol = "";
  Gameboard.players.forEach((player) => {
    if(Gameboard.turn == player.number) {
      symbol = player.symbol;
    }
  })
  this.setAttribute("data-value", symbol);
  this.textContent = symbol;
  gameCheck(symbol, Gameboard.turn);
  Gameboard.turn = (Gameboard.turn + 1) % 2;
}

const gameCheck = function(playerSymbol, turn) {
  const boardCheck = [];
  Gameboard.tiles.forEach((row) => {
    row.forEach((tile) => {
      boardCheck.push(tile.getAttribute("data-value"));
    })
  })
  if(!boardCheck.includes(null)) {
    Gameboard.boardFilled = true;
  }
  for(let i = 0; i < 3; i++) {
    if(boardCheck[3*i] == playerSymbol &&
       boardCheck[3*i+1] == playerSymbol &&
       boardCheck[3*i+2] == playerSymbol) {
      Gameboard.gameOver = true;
      win(turn);
      return;
    }

    if(boardCheck[i] == playerSymbol &&
       boardCheck[3+i] == playerSymbol &&
       boardCheck[6+i] == playerSymbol) {
      Gameboard.gameOver = true;
      win(turn);
      return;
    }

    if(boardCheck[i] == playerSymbol &&
       boardCheck[4] == playerSymbol &&
       boardCheck[8-i] == playerSymbol) {
      Gameboard.gameOver = true;
      win(turn);
      return;
    }
  }
}

const resetBoard = function() {
  Gameboard.gameOver = false;
  Gameboard.boardFilled = false;
  Gameboard.winner = "";
  Gameboard.turn = 0;
  render();
}

const changeName = function() {
  const index = this.getAttribute("data-player");
  Gameboard.players[index].name = prompt("Enter name: ");
  const name = Gameboard.players[index].name;
  const symbol = Gameboard.players[index].symbol;
  const score = Gameboard.players[index].score;

  this.textContent = `${name} (${symbol}): ${score}`;
}

const win = function(index) {
  const playerScore = document.querySelectorAll(".player");
  const name = Gameboard.players[index].name;
  const symbol = Gameboard.players[index].symbol;
  Gameboard.players[index].score++;
  const score = Gameboard.players[index].score;

  playerScore[index].textContent = `${name} (${symbol}): ${score}`;
}

const start = function() {
  const playerScore = document.querySelectorAll(".player");
  const resetBtn = document.querySelector(".resetBtn");
  const player1 = playerFactory(0, "X", "Player1");
  const player2 = playerFactory(1, "O", "Player2");
  let players = [player1, player2]

  players.forEach(player => {
    Gameboard.players.push(player)
  });
  let playerIndex = 0;
  playerScore.forEach(player => {
    player.setAttribute("data-player", playerIndex++);
    player.addEventListener("click", changeName);
  })

  resetBtn.addEventListener("click", resetBoard);

  render();
}();