const getComputerChoice = () => {
    return Math.floor(Math.random() * 3) + 1
}

let humanScore = 0
let computerScore = 0

const resetScore = () => {
    humanScore = 0
    computerScore = 0
}

const convertHumanChoicesToNum = (input) => {
    const output = input.toLowerCase()
    const humanNum = output == "rock" ? 1 : 
                     output == "paper" ? 2:
                     output == "scissors" ? 3:
                     null;
    return humanNum
}

const playRound = (input) => {
    const playerChoice = convertHumanChoicesToNum(input);
    const computerChoice = getComputerChoice();
    const result = document.getElementById('result')
    if (computerChoice == playerChoice){
        result.textContent = "It's a draw"
    }
    else if (computerChoice == 1 && playerChoice == 2){
        result.textContent = "Player picked paper and computer picked rock. Player has won."
        humanScore += 1
    }
    else if (computerChoice == 1 && playerChoice == 3){
        result.textContent = "Player picked scissors and computer picked rock. Computer has won."
        computerScore += 1
    }
    else if (computerChoice == 2 && playerChoice == 1){
        result.textContent = "Player picked rock and computer picked paper. Computer has won."
        computerScore += 1
    }
    else if (computerChoice == 2 && playerChoice == 3){
        result.textContent = "Player picked scissors and computer picked paper. Player has won."
        humanScore += 1
    }
    else if (computerChoice == 3 && playerChoice == 1){
        result.textContent = "Player picked rock and computer picked scissors. Player has won."
        humanScore += 1
    }
    else if (computerChoice == 3 && playerChoice == 2){
        result.textContent = "Player picked paper and computer picked scissors. Computer has won."
        computerScore += 1
    }
}

const getActivity = () => {
    const input = prompt("Would you to play a round! If yes, please type round. ")
    playRound(input)
    console.log("computer score: " + computerScore)
    console.log("human score: " + humanScore)
}

const playFiveRounds = () => {
    const container = document.getElementById('container');
    const winner = document.getElementById('winner');
    const player = document.getElementById('player')
    const computer = document.getElementById('computer')

        for (let button of container.children){
            button.addEventListener("click", () => {
                winner.textContent = ""
                const value = button.textContent;
                playRound(value)
                player.textContent = "Player Score: " + humanScore;
                computer.textContent = "Computer Score: " + computerScore;
                if (computerScore === 5){
                    winner.textContent = "Computer has Won"
                    resetScore()
                }
                else if (humanScore === 5){
                    winner.textContent = "Player has Won"
                    resetScore()
                }
            })
        }

    
}

// getActivity()

document.addEventListener("DOMContentLoaded", function() {
    playFiveRounds();    
})

