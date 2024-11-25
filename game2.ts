const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const grids = 5; // 5x5 grid
const cellSize = canvas.width / grids;
console.log({cellSize});

const maze = [
  [0, 0, 1, 0, 0],         //0 --> Path
  [0, 1, 1, 0, 0],         //1 --> Wall
  [0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
]

function drawGrid(){
    ctx.strokeStyle = '#ccc';
    for (let row = 0; row < grids; row++) {
      for (let col = 0; col < grids; col++) {
        //Draw cell border
        ctx.strokeRect(col* cellSize, row*cellSize, cellSize, cellSize);

        //Draw Walls
        if(maze[row][col] === 1){
            ctx.fillStyle = 'black'
            ctx.fillRect(col* cellSize, row*cellSize, cellSize, cellSize)
        }
      }
        
    }
}
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
    drawPlayer();
}

renderGame();

document.addEventListener('keydown', (e) => {
    const {x, y} = player

    switch (e.key){
        case "ArrowUp":
            if(y > 0 && maze[y-1][x] === 0) player.y -=1
            break;
        case "ArrowDown":
            if(y < grids - 1 && maze[y+1][x] === 0) player.y +=1
            break;
        case "ArrowLeft":
            if (x > 0 && maze[y][x - 1] === 0) player.x -= 1;
            break;
        case "ArrowRight":
            if (x < grids - 1 && maze[y][x + 1] === 0) player.x += 1;
            break;
    }
    renderGame()
})
