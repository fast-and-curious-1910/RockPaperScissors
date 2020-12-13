var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score')
var scoreBoard_div = document.querySelector('.score-board')
var result_div = document.querySelector('.result')
var rock_div = document.getElementById('r')
var paper_div = document.getElementById('p')
var scissors_div = document.getElementById('s')

const draw = () => {
    console.log('\n')
    console.log('You both are quite smart!')
    console.log('Draw')

}


const win= () => {
    userScore++
    userScore_span.innerHTML = userScore;
    // computerScore_span.innerHTML = computerScore_span;
}

const loose= () => {
    
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

    switch (userChoice + computerChoice){
        case "rp":
        case 'pr':
        case 'sp':
            win(userScore)
            break;
        case "rs":
        case 'ps':
        case 'sr':
            loose(userScore)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw()

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