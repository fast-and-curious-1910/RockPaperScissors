var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score')
var scoreBoard_div = document.querySelector('.score-board')
var result_div = document.querySelector('.result')
var rock_div = document.getElementById('r')
var paper_div = document.getElementById('p')
var scissors_div = document.getElementById('s')




const getComputerChoice = () => {
    var choices = ['r','p','s']
    console.log(Math.floor(Math.random() *3 ))
}
getComputerChoice()

const game = (userChoice) => {
    console.log(`${userChoice}`)
}




const main = () => {
    rock_div.addEventListener('click' ,()  => {
        game('r')
    }) 

    paper_div.addEventListener('click' , () => {
        game('p')
    })

    scissors_div.addEventListener('click' , () => {
        game('s')
    })
}

main()