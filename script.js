let firstOperand = Number(prompt('Please enter a number'))
let operator = prompt('choose between +, -, x and /')
let secondOperand = Number(prompt('Please enter a number'))

if (operator == '+') {
    alert(firstOperand + secondOperand)
    
} else if(operator == '-'){
    alert(firstOperand - secondOperand)

}else if(operator == 'x'){
    alert(firstOperand * secondOperand)

}else if(operator == '/'){
    alert(firstOperand / secondOperand)

}
else{
    alert('Invalid operator')
}
