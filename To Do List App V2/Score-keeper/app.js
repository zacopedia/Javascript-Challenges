let btn1 = document.getElementById('p1');
let btn2 = document.getElementById('p2');
let p1Display = document.getElementById('p1display');
let p2Display = document.getElementById('p2display');
let resetBtn = document.getElementById('reset');
let gameOver = false;
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;


btn1.addEventListener("click", function () {
   
    if(!gameOver) {
        p1Score++;

        if (p1Score === winningScore) {
            gameOver = true;
        }
        p1Display.textContent = p1Score;

    }
})


btn2.addEventListener ("click", function () {
    
    if(!gameOver) {
        p2Score++;

        if (p2Score === winningScore) {
            gameOver = true;
        }

        p2Display.textContent = p2Score;
    }
})

resetBtn.addEventListener("click", function () {
    reset();
})

function reset () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
}


// new line for testing github