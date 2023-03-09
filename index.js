const button_color = 'rgb(41, 47, 51, .7)'
const mole_color = '#ad5abf'

class Button
{
    constructor(button)
    {
        this.showing = true
        this.button = button
        this.button.addEventListener('click', () => {
                this.toggleButton()
        })
    }
    toggleButton()
    {
        if ( this.showing )
        {
            this.button.children[0].style.backgroundColor=button_color
        }
        else
        {
            this.button.children[0].style.backgroundColor=mole_color
        }
        this.showing = this.showing^1
    }

    
}

const bArray = []
const elButtons = document.querySelectorAll('[data-button]')
console.log("making the buttons")
console.log(elButtons)
elButtons.forEach(button => {
    bArray.push(new Button(button))
})