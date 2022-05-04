const calcAdd = function(num1,num2){
    return num1 + num2
}

const calcMinus = function(num1,num2){
    return num1-num2
}
const calcMultiply = function(num1,num2){
    return num1 * num2
}

const calcDivide= function(num1,num2){
    return num1 / num2
}


const operate = function(num1,oper,num2){

    if (oper == '+'){
        return calcAdd(num1,num2)
    }
    if (oper == '-'){
        return calcMinus(num1,num2)
    }
    if (oper =='*'){
        return calcMultiply(num1,num2)
    }
    if (oper == '/'){
        return calcDivide(num1,num2)
    }
    
}

console.log(operate(5,'-',2))