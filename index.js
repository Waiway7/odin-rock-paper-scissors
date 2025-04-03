const getComputerChoice = () => {
    return Math.floor(Math.random() * 3) + 1
}

const getHumanChoices = () => {
    const input = prompt("rock, paper, or scissors player please choose?").toLowerCase()
    const humanNum = input == "rock" ? 1 : 
                     input == "paper" ? 2:
                     input == "scissors" ? 3:
                     null;
    return humanNum

}

let humanScore = 0

let computerScore = 0

const playRound = (input) => {
    if (input == "round"){
        const computerChoice = getComputerChoice()
        const playerChoice = getHumanChoices()
        console.log(computerChoice)
        if (computerChoice == getHumanChoices){
            console.log("It's a draw")
        }
        else if (computerChoice == 1 && playerChoice == 2){
            console.log("Player picked paper and computer picked rock. Player has won.")
            humanScore += 1
        }
        else if (computerChoice == 1 && playerChoice == 3){
            console.log("Player picked scissors and computer picked rock. Computer has won.")
            computerScore += 1
        }
        else if (computerChoice == 2 && playerChoice == 1){
            console.log("Player picked rock and computer picked paper. Computer has won.")
            computerScore += 1
        }
        else if (computerChoice == 2 && playerChoice == 3){
            console.log("Player picked scissors and computer picked paper. Player has won.")
            humanScore += 1
        }
        else if (computerChoice == 3 && playerChoice == 1){
            console.log("Player picked rock and computer picked scissors. Player has won.")
            humanScore += 1
        }
        else if (computerChoice == 3 && playerChoice == 2){
            console.log("Player picked paper and computer picked scissors. Computer has won.")
            computerScore += 1
        }
    } 
}

const getActivity = () => {
    const input = prompt("Would you to play a round! If yes, please type round. ")
    playRound(input)
    console.log("computer score: " + computerScore)
    console.log("human score: " + humanScore)
}

getActivity()
