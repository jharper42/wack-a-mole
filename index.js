const button_color = 'rgb(41, 47, 51, .7)'
const mole_color = '#ad5abf'

class Button
{
    constructor(button, board, mole)
    {
        this.button = button
        this.board = board
        this.mole = mole
        this.button.addEventListener('click', () => {
            this.check_wacked()
        })
    }
    check_wacked()
    {
        if (this.mole._location == parseInt(this.button.innerText))
        {
            this.board.update()
            this.board.get_board().innerText = this.board.get_score()
        }

    }

    
}

class Mole {
    constructor(losButtons)
    {
        this._location = 5
        this.buttons = losButtons
    }
    location()
    {
        return this._location
    }
    update_location()
    { 
        this._location = Math.floor(Math.random() * 9 + 1)
        this.buttons.forEach(button => {
            
            if (this._location == parseInt(button.innerText)) {
                button.children[0].style.backgroundColor = mole_color
            }
            else
            {
                button.children[0].style.backgroundColor = button_color               
            }
                
        })
    }
}

class ScoreBoard {
    constructor(board)
    {
        this.score = 0
        this.board = board
    }
    update()
    {
        this.score += 1
    }
    get_score()
    {
        return this.score
    }
    get_board()
    {
        return this.board
    }
}

const bArray = []
const losButtons = document.querySelectorAll('[data-button]')
const board = document.querySelector('[data-score-board]')
const score_board = new ScoreBoard(board)
const elMole = new Mole(losButtons)
console.log("making the buttons")
console.log(losButtons)
losButtons.forEach(button => {
    bArray.push(new Button(button, score_board, elMole))
})

setInterval(function () {
    elMole.update_location()
}, 1000)