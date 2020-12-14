var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score')
var scoreBoard_div = document.querySelector('.score-board')
var result_p = document.querySelector('.result > p')
var rock_div = document.getElementById('r')
var paper_div = document.getElementById('p')
var scissors_div = document.getElementById('s')


const toWord = (letter) => {

    if (letter === 'r'){
        return 'Rock'
    }
    if (letter === 's') {
        return 'Scissors'
    }
    else return 'Paper'
}

const draw = (u,c) => {
    console.log('\n')
    console.log('You both are quite smart!')
    console.log('Draw')

}

const win= (u,c) => {
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${toWord(c)} beats ${toWord(c)}. You Win!`
}

const loose= (u,c) => {
    
}




const getComputerChoice = () => {
    var choices = ['r','p','s']
    var randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}

const game = (userChoice) => {
    var computerChoice = getComputerChoice()
    // console.log('Computer Choice => ',computerChoice)
    // console.log( 'User Choice => ' , userChoice)
    var bothchoice = userChoice + computerChoice
    switch (bothchoice){
        case "rp":
        case 'pr':
        case 'sp':
            win(userChoice,computerChoice)
            break;
        case "rs":
        case 'ps':
        case 'sr':
            loose(userChoice,computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,computerChoice)
            break

    }
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