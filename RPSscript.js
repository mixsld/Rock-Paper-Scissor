    let humanScore = 0;
    let compScore = 0;
    let rounds = 0;
    let maxRounds = 5;
    const buttons = document.querySelectorAll(".button-container button");

    const resultContainer = document.querySelector(".result-container p");
    const compContainer = document.querySelector(".compContainer p");
    const humanContainer = document.querySelector(".humanContainer p");
    const roundsContainer = document.querySelector(".roundsContainer p");
    const choiceContainer = document.querySelector(".choiceContainer p");
    let roundsResultsContainer = document.querySelector(".roundsResultsContainer p");


    function getComputerChoice() {
        const choices = ["rock", "paper", "scissor"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(playerSelection) {

        if (rounds < maxRounds) {

            const computerSelection = getComputerChoice();

            choiceContainer.textContent = `You select ${playerSelection}, Computer select ${computerSelection}`;

            const rules = {
                rock: "scissor",
                paper: "rock", 
                scissor: "paper"
            };

            if (computerSelection == playerSelection) {
                roundsResultsContainer.textContent = "Draw";
                showScore()
            } else if (rules[playerSelection] == computerSelection) {
                roundsResultsContainer.textContent = "Human Wins";
                humanScore++;
                rounds++;
                showScore()
            } else {
                roundsResultsContainer.textContent = "Computer Wins";
                compScore++;
                rounds++;
                showScore();
            }
        } 
        if (rounds == maxRounds) {
            endGame();
        }
        roundsContainer.textContent = `Rounds: ${rounds}`;
    }

    const restartButton = document.querySelector(".result-container button");

    function endGame() {
        if (humanScore > compScore) {resultContainer.textContent = "Game Over: Human Wins";}
        if (humanScore < compScore) {resultContainer.textContent = "Game Over: Computer Wins";}   
        
        restartButton.textContent = "Restart";
    }

    function showScore() {
        humanContainer.textContent = `Human Score: ${humanScore}`;
        compContainer.textContent = `Computer Score: ${compScore}`;
    }
    
    document.getElementById("restartGame").addEventListener("click", ()=> {
        humanScore = 0;
        compScore = 0;
        rounds = 0;

        roundsContainer.textContent = `Rounds: ${rounds}`;
        humanContainer.textContent = `Human Score: ${humanScore}`;
        compContainer.textContent = `Computer Score: ${compScore}`;
        choiceContainer.textContent = "";
        roundsResultsContainer.textContent = "";
        resultContainer.textContent = "";
        restartButton.textContent = "";

    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            playRound(button.id);
            });
    });
    