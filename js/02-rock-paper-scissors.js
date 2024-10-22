function playGame() {
    const choices = ["rock", "paper", "scissors"];
    let answer = prompt("Choose rock, paper, or scissors:").toLowerCase();
    
    let isValidChoice = false;
    for (let choice of choices) {
        if (choice === answer) {
            isValidChoice = true;
            break;
        }
    }
    
    if (!isValidChoice) {
        alert("Invalid choice! Please choose rock, paper, or scissors.");
        return playGame();
    }

    let random = Math.floor(Math.random() * 3);
    let computer = choices[random];
    
    alert(`Computer chose: ${computer}`);

    let result;

    if (answer === computer) {
        result = `It's a tie! Both chose ${answer}.`;
    } else if (
        (answer === "rock" && computer === "scissors") ||
        (answer === "paper" && computer === "rock") ||
        (answer === "scissors" && computer === "paper")
    ) {
        result = `You win! ${answer} beats ${computer}.`;
    } else {
        result = `You lose! ${computer} beats ${answer}.`;
    }

    alert(result);
}

playGame();
