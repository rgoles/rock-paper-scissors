const buttons = document.querySelectorAll('.action-buttons .action img')
const playAgainButton = document.getElementById('play-again')
const winnerText = document.getElementById('winner')
let scoreNumber = document.getElementById('score-num')
let score = 0

/* rock paper scissors logic */
const compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie"
    } else if ((choice1 === "rock" && choice2 === "scissors") || (choice1 === "paper" && choice2 === "rock") || (choice1 === "scissors" && choice2 === "paper")) {
        return `${choice1} wins`;
    } else {
        return `${choice2} wins`;
    }
}
const computerChoice = () => {
    let choices = ['rock', 'scissors', 'paper']
    let finalChoice = choices [Math.floor(Math.random() * choices.length)]
    return (finalChoice)
}


buttons.forEach(img => {
    img.addEventListener('click', () => {
        const playerChoice = img.id;
        const finalComputerChoice = computerChoice();
        const usporedba = compare(playerChoice, finalComputerChoice)

        const firstPage = document.getElementById('page-one');
        const nextPage = document.getElementById('page-two');

        console.log(compare(playerChoice, finalComputerChoice))

        if (usporedba === `${playerChoice} wins`) {
            score++
            scoreNumber.innerHTML = score.toString()
            console.log(score)
        } else {
            console.log('ne funkcionira mi usporedba ili si izgubio')
        }

        firstPage.addEventListener('click', () => {
            firstPage.classList.add('hidden'); // Hide the first page
            nextPage.style.display = 'flex';


            const choice1 = document.createElement("img");
            const choice2 = document.createElement("img");

            choice1.src = `img/${playerChoice}Button.png`;
            choice2.src = `img/${finalComputerChoice}Button.png`;

            document.querySelector('.userChoice').appendChild(choice1);
            choice1.classList.add('animated');

            choice1.addEventListener("animationend", () => {
                document.querySelector('.computerChoice').appendChild(choice2);
                choice2.classList.add('animated');
                winnerText.innerHTML = usporedba
            }, false)


        });
    });
});
// this button reloads the page
playAgainButton.addEventListener("click", () => {
    window.location.reload();
})

// MODAL OPENING PART OF THE CODE
const openBtn = document.getElementById('openModal')
const closeBtn = document.getElementById('closeModal')
const modal = document.getElementById('modal')

openBtn.addEventListener('click', () => {
    modal.classList.add('open')
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open')
})