
function calculator() {

    var numOne = prompt('Please choose a number')
    var operator = prompt('Please choose an operator + - * or /')
    var numTwo = prompt('Please choose another number')
    var numOneisNumber = false
    var numTwoisNumber = false   

    function add(numOne, numTwo) {
        return +numOne + +numTwo
    } 
    function subtract(numOne, numTwo) {
        return +numOne - +numTwo
    }
    function multiply(numOne, numTwo) {
        return +numOne * +numTwo
    }
    function divide(numOne, numTwo) {
        return +numOne / +numTwo
    }

    if (isNaN(numOne) || numOne === '' || numOne === null) {
        alert(numOne + ' is not a number, please try again')
    } else {
        numOneisNumber = true
    }
    if (isNaN(numTwo) || numTwo === '' || numTwo === null) {
        alert(numTwo + ' is not a number, please try again')
    } else {
        numTwoisNumber = true
    }
    if (['+', '-', '*', '/'].includes(operator)) {
    } else {
        alert(operator + ' is not an operator, please try again')
    }
    if (numOneisNumber === true && numTwoisNumber === true && operator === '+') {
        alert(numOne + ' + ' + numTwo + ' = ' + add(numOne, numTwo))
        return numOne + ' + ' + numTwo + ' = ' + add(numOne, numTwo)
    }
    if (numOneisNumber === true && numTwoisNumber === true && operator === '-') {
        alert(numOne + ' - ' + numTwo + ' = ' + subtract(numOne, numTwo))
        return numOne + ' - ' + numTwo + ' = ' + subtract(numOne, numTwo)
    }
    if (numOneisNumber === true && numTwoisNumber === true && operator === '*') {
        alert(numOne + ' * ' + numTwo + ' = ' + multiply(numOne, numTwo))
        return numOne + ' * ' + numTwo + ' = ' + multiply(numOne, numTwo)
    }
    if (numOneisNumber === true && numTwoisNumber === true && operator === '/') {
        alert(numOne + ' / ' + numTwo + ' = ' + divide(numOne, numTwo))
        return numOne + ' / ' + numTwo + ' = ' + divide(numOne, numTwo)
    }
}

console.log(calculator())