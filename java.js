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

const container = document.querySelector('.baton')

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
const numClear = document.querySelector('#numclear')
const numBack = document.querySelector('#numback')


const allNum = document.querySelectorAll('.num')
const allOps = document.querySelectorAll('.numop')
const doublenums = document.getElementById('numclear')
const doubleback = document.getElementById('numback')
console.log(doublenums)


    

allNum.forEach(allNum => {
    allNum.addEventListener('mouseenter', e =>{
    allNum.style.backgroundColor = 'darkgrey'
});

    })

    allNum.forEach(allNum => {
        allNum.addEventListener('mouseleave', e =>{
        allNum.style.backgroundColor = 'white'
    });
    
        })
    
allOps.forEach(allOps => {
    allOps.addEventListener('mouseenter', e =>{
    allOps.style.backgroundColor = 'rgb(111, 216, 7)'
});

    })

    allOps.forEach(allOps => {
        allOps.addEventListener('mouseleave', e =>{
        allOps.style.backgroundColor = 'chartreuse'
    });
    
        })

            
            doublenums.addEventListener('mouseenter', e =>{
            doublenums.style.backgroundColor = 'red'
        });
        doublenums.addEventListener('mouseleave', e =>{
            doublenums.style.backgroundColor = 'chocolate'
        
        })
        numBack.addEventListener('mouseenter', e =>{
            numBack.style.backgroundColor = 'rgb(103, 140, 250)'
        });

        numBack.addEventListener('mouseleave', e =>{
            numBack.style.backgroundColor = 'royalblue'
        });





const bonk = document.querySelector('#display')
    let element = document.createElement('div')
    element.innerHTML = ''
const display = document.querySelector('.display')



let store = []
let numbers = []

addEventListener('keydown', function(event){
    if(event.keyCode == 97 || event.keyCode == 49){
  
    numbers.push(1); display.append(1)
    }
    if(event.keyCode == 98 || event.keyCode == 50 ){
  
        numbers.push(2); display.append(2)
        }
    if(event.keyCode == 99 ||event.keyCode == 51 ){
  
        numbers.push(3); display.append(3)
        }
     if(event.keyCode == 100 ||event.keyCode == 52 ){
  
     numbers.push(4); display.append(4)
            }
     if(event.keyCode == 101 ||event.keyCode == 53  ){
  
         numbers.push(5); display.append(5)
                }
    if(event.keyCode == 102 ||event.keyCode == 54 ){
  
        numbers.push(6); display.append(6)
                    }
    if(event.keyCode == 103 || event.keyCode == 55 ){
  
         numbers.push(7); display.append(7)
                        }
     if(event.keyCode == 104 || event.keyCode == 56 ){
  
     numbers.push(8); display.append(8)
                            }
    if(event.keyCode == 105 || event.keyCode == 57 ){
  
     numbers.push(9); display.append(9)
                                }
    if(event.keyCode == 96 || event.keyCode == 48 ){
  
     numbers.push(0); display.append(0)
             }
     if(event.keyCode == 110 || event.keyCode == 190 ){
  
      numbers.push('.'); display.append('.')
                        }
     if(event.keyCode == 106 ){  // Multiplying *
  
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
        if(event.keyCode == 111 || event.keyCode == 191 ){   // Division /
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

        if(event.keyCode == 107 ) { // Plus +
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
        if(event.keyCode == 109 ){  // Minus - 
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
        if(event.keyCode == 13 ){ // Equal = 
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
        if(event.keyCode == 8 ){  // Backspace 
            display.removeChild(display.lastChild);
            let length = store[store.length -1]
            if (length == ('*') ||length == ('+') || length == ('-') || length == ('/')){
                store.splice(-1,1);
                return
            }
            
            numbers.splice(-1,1)
        }
})


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
numBack.onclick = function(){

    display.removeChild(display.lastChild);
    let length = store[store.length -1]
    if (length == ('*') && numbers.length >=1 ||length == ('+') && numbers.length >=1 || length == ('-') && numbers.length >=1 || length == ('/') && numbers.length >=1){
        numbers.splice(-1,1);
        return
    }
    if (length == ('*') && numbers.length == 0 || length == ('+') && numbers.length == 0 || length == ('-') && numbers.length == 0|| length == ('/') && numbers.length == 0) {
        store.splice(-1,1)
        return 
    
    }
    if (isNaN(length) == false) {
        store.splice(-1,1)
        return 
    }
    
    numbers.splice(-1,1);

}
numDecimal.onclick = function(){
    if (numbers.includes('.')){
        return 
    }
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

 numClear.onclick = function(){
    
display.replaceChildren(element)
store.splice(0,store.length)
numbers.splice(0,numbers.length)
display.append(store)
    }

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



