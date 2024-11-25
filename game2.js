var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var grids = 5; // 5x5 grid
var cellSize = canvas.width / grids;
console.log({ cellSize: cellSize });
var maze = [
    [0, 0, 1, 0, 0], //0 --> Path
    [0, 1, 1, 0, 0], //1 --> Wall
    [0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
];
function drawGrid() {
    ctx.strokeStyle = '#ccc';
    for (var row = 0; row < grids; row++) {
        for (var col = 0; col < grids; col++) {
            //Draw cell border
            ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
            //Draw Walls
            if (maze[row][col] === 1) {
                ctx.fillStyle = 'black';
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        }
    }
}
drawGrid();
var player = { x: 0, y: 0 };
//Draw A Player
function drawPlayer() {
    ctx.fillStyle = 'blue';
    var centerX = player.x * cellSize + cellSize / 2;
    var centerY = player.y * cellSize + cellSize / 2;
    var radius = cellSize / 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
}
//Clear the canvas and re-draw everything
function renderGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawPlayer();
}
renderGame();
document.addEventListener('keydown', function (e) {
    var x = player.x, y = player.y;
    switch (e.key) {
        case "ArrowUp":
            if (y > 0 && maze[y - 1][x] === 0)
                player.y -= 1;
            break;
        case "ArrowDown":
            if (y < grids - 1 && maze[y + 1][x] === 0)
                player.y += 1;
            break;
        case "ArrowLeft":
            if (x > 0 && maze[y][x - 1] === 0)
                player.x -= 1;
            break;
        case "ArrowRight":
            if (x < grids - 1 && maze[y][x + 1] === 0)
                player.x += 1;
            break;
    }
    renderGame();
});
