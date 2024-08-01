window.onload = function() {
    const gameContainer = document.getElementById('gameContainer');
    const player = document.getElementById('player');
    const scoreDisplay = document.getElementById('score');

    let playerX = gameContainer.clientWidth / 2;
    let playerY = gameContainer.clientHeight / 2;
    let playerSpeed = 5;
    let score = 0;

    function resizeGameContainer() {
        gameContainer.style.width = window.innerWidth + 'px';
        gameContainer.style.height = window.innerHeight + 'px';
    }

    function init() {
        resizeGameContainer();
        window.addEventListener('resize', resizeGameContainer, false);
        gameLoop();
    }

    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    function update() {
        // Example: Move the player
        console.log(player.clientWidth);
        if (playerX + playerSpeed < gameContainer.clientWidth - player.clientWidth && playerX - playerSpeed > 0) {
            playerX += playerSpeed;
        } else {
            playerSpeed = -playerSpeed;
        }

        // Increment the score
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
    }

    function draw() {
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';
    }

    init();
};
