const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button')

//  console.log(buttons)

let calculation = []
let accumulativecalculation = []

function calculate(button) {
    const value = button.textContent
    if (value === 'AC') {
        calculation = []
        screenDisplay.textContent = '0'
        console.log(screenDisplay.textContent)
    } else if (value === '=') {
        screenDisplay.textContent = eval(accumulativecalculation)
    } else if (value === '+/-') {


    } else if (value === '%') {


    } else if (value === 'CE') {


    } else {
        calculation.push(value)
        accumulativecalculation = calculation.join('')
        screenDisplay.textContent = accumulativecalculation
    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))


