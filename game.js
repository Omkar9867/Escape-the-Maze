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
