let canvas = document.getElementById("gameCanvas");
let pen = canvas.getContext("2d");

const CELL_SIZE = 20;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let snake = [{x: 100, y: 100}];
let food = getRandomFood();
let dx = CELL_SIZE;
let dy = 0;
let score = 0;

// Draw everything
function draw() {
    // Clear canvas
    pen.fillStyle = "black";
    pen.fillRect(0, 0, WIDTH, HEIGHT);

    // Draw food
    pen.fillStyle = "green";
    pen.fillRect(food.x, food.y, CELL_SIZE, CELL_SIZE);

    // Draw snake
    pen.fillStyle = "red";
    for (let part of snake) {
        pen.fillRect(part.x, part.y, CELL_SIZE, CELL_SIZE);
    }

    // Draw score
    pen.fillStyle = "white";
    pen.font = "20px Arial";
    pen.fillText("Score: " + score, 10, 20);
}

// Move the snake
function moveSnake() {
    let head = {x: snake[0].x + dx, y: snake[0].y + dy};

    // Check collision with walls
    if (head.x < 0 || head.x >= WIDTH || head.y < 0 || head.y >= HEIGHT) {
        gameOver();
        return;
    }

    // Check collision with itself
    for (let part of snake) {
        if (head.x === part.x && head.y === part.y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    // Check if eating food
    if (head.x === food.x && head.y === food.y) {
        score += 1;
        food = getRandomFood();
    } else {
        snake.pop();
    }
}

// Generate random food location
function getRandomFood() {
    let x = Math.floor(Math.random() * (WIDTH / CELL_SIZE)) * CELL_SIZE;
    let y = Math.floor(Math.random() * (HEIGHT / CELL_SIZE)) * CELL_SIZE;
    // Make sure food doesn't spawn inside the snake
    while (snake.some(part => part.x === x && part.y === y)) {
        x = Math.floor(Math.random() * (WIDTH / CELL_SIZE)) * CELL_SIZE;
        y = Math.floor(Math.random() * (HEIGHT / CELL_SIZE)) * CELL_SIZE;
    }
    return {x, y};
}

// Handle keyboard input with instant movement
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp" && dy === 0) {
        dx = 0;
        dy = -CELL_SIZE;
        moveSnake();
        draw();
    } else if (e.key === "ArrowDown" && dy === 0) {
        dx = 0;
        dy = CELL_SIZE;
        moveSnake();
        draw();
    } else if (e.key === "ArrowLeft" && dx === 0) {
        dx = -CELL_SIZE;
        dy = 0;
        moveSnake();
        draw();
    } else if (e.key === "ArrowRight" && dx === 0) {
        dx = CELL_SIZE;
        dy = 0;
        moveSnake();
        draw();
    }
});

// End the game
function gameOver() {
    clearInterval(gameInterval);
    alert("Game Over! Your score is " + score);
}

// Game loop
function gameLoop() {
    moveSnake();
    draw();
}

let gameInterval = setInterval(gameLoop, 150);
