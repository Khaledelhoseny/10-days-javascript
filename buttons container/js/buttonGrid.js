let button1 = document.querySelector("#btn1")
let button2 = document.querySelector("#btn2")
let button3 = document.querySelector("#btn3")
let button4 = document.querySelector("#btn4")
let button5 = document.querySelector("#btn5")
let button6 = document.querySelector("#btn6")
let button7 = document.querySelector("#btn7")
let button8 = document.querySelector("#btn8")
let button9 = document.querySelector("#btn9")

button5.addEventListener('click' ,plusOne)

function plusOne(){
    let number = button1.innerHTML
    button1.innerHTML = button4.innerHTML
    button4.innerHTML = button7.innerHTML
    button7.innerHTML = button8.innerHTML
    button8.innerHTML = button9.innerHTML
    button9.innerHTML = button6.innerHTML
    button6.innerHTML = button3.innerHTML 
    button3.innerHTML = button2.innerHTML 
    button2.innerHTML = number
        
}

