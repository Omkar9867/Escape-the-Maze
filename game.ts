const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const grids = 10; // 10x10 grid
const cellSize = canvas.width / grids;

function drawGrid() {
  ctx.strokeStyle = "#ccc";
  for (let i = 0; i <= grids; i++) {
    //Vertial line / path
    ctx.beginPath();
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, canvas.height);
    ctx.stroke();

    //Horizontal line / path
    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(canvas.width, i * cellSize);
    ctx.stroke();
  }
}

//Render the grid
drawGrid()

const player = {x:0, y:0}

//Draw A Player
function drawPlayer(){
    ctx.fillStyle = 'blue';
    const centerX = player.x * cellSize + cellSize/2
    const centerY = player.y * cellSize + cellSize/2
    const radius = cellSize/3;
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius,0,Math.PI * 2);
    ctx.fill()
}

//Clear the canvas and re-draw everything
function renderGame(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawGrid();
    drawPlayer;
}

renderGame();