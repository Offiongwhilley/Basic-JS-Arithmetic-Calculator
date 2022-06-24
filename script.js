let question = prompt('Do you want to perform a calculation? y/ n')

if (question == 'y' || question == 'Y') {
    let firstOperand = Number(prompt('Please enter a number \n'))
    let operator = prompt('choose between +, -, x. / and % \n')
    let secondOperand = Number(prompt('Please enter a number \n'))

    if (operator == '+') {
        alert(firstOperand + secondOperand)
        
    } else if(operator == '-'){
        alert(firstOperand - secondOperand)
    
    }else if(operator == 'x'){
        alert(firstOperand * secondOperand)
    
    }else if(operator == '/'){
        alert(firstOperand / secondOperand)
    
    }else if(operator == '%'){
        alert(firstOperand % secondOperand)

    }else{
        alert('Invalid operator')
    }
    

} else if(question == 'n' || question == 'N'){
    alert('Have a nice day.')

}else
    alert('Invalid option')

