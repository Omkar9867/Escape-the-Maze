var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var grids = 10; // 10x10 grid
var cellSize = canvas.width / grids;
function drawGrid() {
    ctx.strokeStyle = "#ccc";
    for (var i = 0; i <= grids; i++) {
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
//Add Arrow Key Movement
document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "ArrowUp":
            if (player.y > 0)
                player.y -= 1;
            break;
        case "ArrowDown":
            if (player.y < grids - 1)
                player.y += 1;
            break;
        case "ArrowLeft":
            if (player.x > 0)
                player.x -= 1;
            break;
        case "ArrowRight":
            if (player.x < grids - 1)
                player.x += 1;
            break;
    }
    renderGame();
});
