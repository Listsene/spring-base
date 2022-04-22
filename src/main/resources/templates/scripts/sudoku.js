// sample sudoku games
const easy = [
  "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
  "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium = [
  "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
  "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard = [
  "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
  "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

var timer;
var selectedNum;
var selectedCell;
var disableSelect;

window.onload = function() {
    getId("start-btn") .addEventListener("click", startGame);
}

function getId(id) {
    return document.getElementById(id);
}

function startGame() {
    let board;
    if(getId("diff-1").checked) board = easy[0];
    else if(getId("diff-2").checked) board = medium[0];
    else board = hard[0];

    disableSelect = false;
    generateBoard(board);
    startTimer();

    getId("keypad-container").classList.remove("hidden");
}

function startTimer() {
    let time = 0;
    getId("timer").textContent = timeConversion(time);
    timer = setInterval(function() {
        time++;
        getId("timer").textContent = timeConversion(time);
    }, 1000)
}

// convert seconds to mm:ss
function timeConversion(time) {
    let minutes = Math.floor(time/60);
    if(minutes < 10) minutes = "0" + minutes;
    let seconds = time % 60;
    if(seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}

function generateBoard(board) {
    reset();
    let cellCount = 0;
    for(let i = 0; i < 81; i++) {
        let cell = document.createElement("p");
        if(board.charAt(i) != "-") {
            cell.textContent = board.charAt(i);
        } else {
            //Add click event listener to cell
        }
        cell.id = cellCount++;
        cell.classList.add("cell");
        if((cell.id > 17 && cell.id < 27) || (cell.id > 44 && cell.id < 54)) {
            cell.classList.add("bottomBorder");
        }
        if((cell.id + 1) % 9 == 3 || (cell.id + 1) % 9 == 6) {
            cell.classList.add("rightBorder");
        }
        getId("board").appendChild(cell);
    }
}

function reset() {
    let cells = document.querySelectorAll(".cell");
    for(let i = 0; i < cells.length; i++) {
        cells[i].remove();
    }
    if(timer) resetTimer();
    // Deselect any numbers
    for(let i = 0; i < getId("keypad-container").children.length; i++) {
        getId("keypad-container").children[i].classList.remove("selected");
    }
    selectedCell = null;
    selectedNum = null;
}

function resetTimer() {
    clearInterval(timer);
}




