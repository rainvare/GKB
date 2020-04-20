let choice = ['rock', 'paper', 'scissors']
len = choice.length

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener('click', function (e) { playgif(e.target.id) })
})

function playgif(path) {

    let compselect = computerPlay()
    const div = document.querySelector(".gif")

    div.innerHTML = ""  //to clear everytime

    const playerimg = document.createElement("img")
    const compimg = document.createElement("img")

    playerimg.src = `./images/${path}.gif`
    playerimg.style.transform = "scaleX(-1)"
    compimg.src = `./images/${compselect}.gif`

    div.appendChild(playerimg)
    div.appendChild(compimg)
    delayresult(path, compselect)
}

let delayrs
function delayresult(path, compselect) {
    //we are going to show and update the result only after the gif has finished playing
    clearTimeout(delayrs)
    delayrs = setTimeout(function () { result(path, compselect) }, 1200)
}

let rounds = 0
function result(psel, csel) {
    rounds += 1
    rs = playRound(psel, csel)
    const pscore = document.querySelector("#ps")
    const cscore = document.querySelector("#cs")
    console.log("This is wrong" + rs)
    pscore.innerText = rs[0]
    cscore.innerText = rs[1]
    if (rounds === 5) {
        finishgame(rs[0], rs[1], pscore, cscore)
        pscor = 0
        cscor = 0
    }
}


function getRandomInt() {
    return Math.floor(Math.random() * len);
}
function computerPlay() {
    return choice[getRandomInt()];
}
let pscor = 0
let cscor = 0

function playRound(playerSelection, computerSelection) {
    let compare = choice[(choice.indexOf(playerSelection) + 1) % len]
    if (computerSelection === playerSelection) {
        console.log("It's a draw!.")
    }
    else if (computerSelection === compare) {
        //console.log(`You loose.Computer choose ${playerSelection} which beats ${computerSelection} choosen by player.Better luck next time.`)
        cscor += 1

    }
    else {
        //console.log(`You win.Player choose ${playerSelection} which beats ${computerSelection} choosen by computer.Hurray!!`)
        pscor += 1

    }
    return [pscor, cscor]

}

function finishgame(psco, csco, pscore, cscore) {
    rounds = 0
    console.log("This is right? " + pscor + cscor)
    pscore.innerText = 0
    cscore.innerText = 0
    if (psco > csco) {
        alert(`You are the winner. You won ${psco} whereas computer won ${csco} out of 5 games`)
    }
    else if (csco > psco) {
        alert(`You lost. You won only ${psco} whereas computer won ${csco} out of 5 games`)
    }
    else {
        alert("This game is a draw.")
    }

}