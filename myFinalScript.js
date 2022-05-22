let playGame = confirm( "Do you want play the game ... " );

if(playGame){

    let humanPlayer = prompt( "Enter rock paper or scissors");

    if(humanPlayer){

        let humanChoice = humanPlayer.trim().toLowerCase();

        if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){

            let computerPlayer = Math.floor((Math.random() * 3 ) + 1 );

            let computerChoice =
            computerPlayer === 1
            ? "rock"
            :computerPlayer === 2
            ? "paper"
            :"scissors"
    
            let result = 
            humanChoice === computerChoice
            ? " Tie! "
            :humanChoice === "paper" && computerChoice === "rock"
            ?`Human: ${humanChoice}\nComputer: ${computerChoice}\n Human wins!`
            :humanChoice === "rock" && computerChoice === "scissors"
            ?`Human: ${humanChoice}\nComputer: ${computerChoice}\n Human wins!`
            :humanChoice === "scissors" && computerChoice === "paper"
            ?`Human: ${humanChoice}\nComputer: ${computerChoice}\n Human wins!`
            :`Human: ${humanChoice}\nComputer: ${computerChoice}\n Computer wins!`
    
            alert(result)
    
            let playAgain = confirm("Do you want to play again?")
            playAgain ? location.reload() : alert("Okay, thanks for the game ! See you next time ")
    


        }else{
            alert("You did not enter rock paper or scissors ")
        }


       
    }else{
        alert("Okay, you changed your mind .. Next time ! ")
    }

}else{
    alert(" Okay, then we play next time" );
}