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
        if (num2 == 0){
            return display.append('ERORR')
        }
        return calcDivide(num1,num2)
    }
    
}



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
const numDecimal = document.querySelector('#decimal')
const numEqual = document.querySelector('#numEqual')

const bonk = document.querySelector('#display')
    let element = document.createElement('div')
    element.innerHTML = ''
const display = document.querySelector('.display')

let store = []
let numbers = []



num1.onclick = function(){

    numbers.push(1); display.append(1)
 
}
   

num2.onclick = function(){

    numbers.push(2);  display.append(2)

    
}
num3.onclick = function(){
    numbers.push(3); display.append(3);  
    
}
num4.onclick = function(){
    numbers.push(4) && display.append(4);  
   
    }
num5.onclick = function(){
    numbers.push(5); display.append(5);  
    
}
num6.onclick = function(){
    numbers.push(6); display.append(6);  
   
}
num7.onclick = function(){
    numbers.push(7); display.append(7);  
   
}
num8.onclick = function(){
    numbers.push(8); display.append(8);  

}
num9.onclick = function(){
    numbers.push(9); display.append(9); 
}
num0.onclick = function(){
    numbers.push(0);  display.append(0);  
 
}

numDecimal.onclick = function(){
    numbers.push('.');  display.append('.');  
 
}



numMupltiply.onclick = function(){
    let empty =[]

    let join = numbers.join('')
    if (numbers.length >= 1){
    let joinnumber = parseFloat(join)
    store.push(joinnumber)
    }
    numbers = empty

    display.append('*')

     if (store.length == 3 ){
        store.push(operate(store[0],store[1],store[2])) && store.splice(0,3)
    } 
    store.push('*') 
}
numDivide.onclick = function(){
    let empty =[]

    let join = numbers.join('')
    if (numbers.length >= 1){
    let joinnumber = parseFloat(join)
    store.push(joinnumber)
    }
    numbers = empty

     display.append('/');  

    if (store.length == 3 ){
        store.push(operate(store[0],store[1],store[2])) && store.splice(0,3)
    } 
    store.push('/')
}
numMinus.onclick = function(){
    let empty =[]

    let join = numbers.join('')
    if (numbers.length >= 1){
    let joinnumber = parseFloat(join)
    store.push(joinnumber)
    }
    numbers = empty

    display.append('-');  

    if (store.length == 3 ){
        store.push(operate(store[0],store[1],store[2])) && store.splice(0,3)
    } 

    store.push('-')
}


numPlus.onclick = function(){
    let empty =[]

    let join = numbers.join('')
    if (numbers.length >= 1){
    let joinnumber = parseFloat(join)
    store.push(joinnumber)
    }
    numbers = empty
    display.append('+');
     
    if (store.length == 3 ){
        store.push(operate(store[0],store[1],store[2])) && store.splice(0,3)
    } 
    store.push('+');
}

//  numClear.onclick = function(){
    
// display.replaceChildren(element)
// store.splice(0,store.length)
// display.append(store)
//     }

numEqual.onclick = function(){
    let empty =[]
     
    let join = numbers.join('')
    if (numbers.length >= 1){
    let joinnumber = parseFloat(join)
    store.push(joinnumber)
    numbers = empty
    }
    if (store.length <= 2){
       return  display.append('=no bueno hose')
    }
    if (store.length == 3 ){
        store.push(operate(store[0],store[1],store[2])) && store.splice(0,3)
    } 
      display.append('=');
    display.append(Math.round(store*10)/10)
}