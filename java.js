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
let xxix= 2+2
console.log(operate([2,'+',2]))

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const num4 = document.querySelector('#num4')
const num5 = document.querySelector('#num5')
const num6 = document.querySelector('#num6')
const num7 = document.querySelector('#num7')
const num8 = document.querySelector('#num8')
const num9 = document.querySelector('#num9')
const num0 = document.querySelector('#num0')
const numMupltiply = document.querySelector('#numMulti')
const numDivide = document.querySelector('#numDivide')
const numMinus = document.querySelector('#numMinus')
const numPlus = document.querySelector('#numPlus')
const numEqual = document.querySelector('#numEqual')

const display = document.querySelector('.display')

let store = []

num1.onclick = function(){
    return store.push(1) && display.append(1) 
    
}
console.log(store)

num2.onclick = function(){
    return store.push(1) && display.append(2)
}
num3.onclick = function(){
    return display.append(3)
}
num4.onclick = function(){
    return display.append(4)
}
num5.onclick = function(){
    return display.append(5)
}
num6.onclick = function(){
    return display.append(6)
}
num7.onclick = function(){
    return display.append(7)
}
num8.onclick = function(){
    return display.append(8)
}
num9.onclick = function(){
    return display.append(9)
}
num0.onclick = function(){
    return display.append(0)
}
numMupltiply.onclick = function(){
    return store.push('*') &&  display.append('*')
}
numDivide.onclick = function(){
    return display.append('/')
}
numMinus.onclick = function(){
    return display.append('-')
}
numPlus.onclick = function(){
    return display.append('+')
}
numEqual.onclick = function(){
    return console.log(store.push(operate(store))) 
}
console.log(store)