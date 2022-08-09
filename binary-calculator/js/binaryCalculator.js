let button0 = document.querySelector("#btn0") 
let button1 = document.querySelector("#btn1")
let buttonSum = document.querySelector("#btnSum")
let buttonEqual = document.querySelector("#btnEql")
let buttonSub = document.querySelector("#btnSub")
let buttonMul = document.querySelector("#btnMul")
let buttonDiv = document.querySelector("#btnDiv")
let buttonClear = document.querySelector("#btnClr")

let result = document.querySelector("#res")


button0.addEventListener("click" , showButton0 )


function showButton0(){
  
  result.innerText+=button0.innerText

  console.log(result.innerText)
  
}
button1.addEventListener("click" , showButton1 )



function showButton1(){
 
  result.innerText+=button1.innerText
 
    console.log(result.innerText)
  
}




buttonSum.addEventListener("click" , sumFunc )
function sumFunc(){
  result.innerText+=buttonSum.innerText
}


buttonSub.addEventListener("click" , subFunc )
function subFunc(){
  result.innerText+=buttonSub.innerText
}

buttonMul.addEventListener("click" , mulFunc )
function mulFunc(){
  result.innerText+=buttonMul.innerText
}

buttonDiv.addEventListener("click" , divFunc )
function divFunc(){
  result.innerText+=buttonDiv.innerText
}

buttonClear.addEventListener("click" , clearFunc )
function clearFunc(){
  console.log("clearr")

  result.innerText = result.innerText.substring(0, result.innerText.length - 1);

}




buttonEqual.addEventListener("click" ,equalFunc)

function equalFunc(){

  

  if(result.innerText.includes("+")){
  let operand1 =  result.innerText.slice(result.innerText.indexOf("+")+1)
  let operand2 =  result.innerText.slice(0,result.innerText.indexOf("+"))
  let deci1 = parseInt(operand1, 2)
  let deci2 = parseInt(operand2, 2)
    clear()
    result.innerText =  Number(deci1+deci2).toString(2)
    
  }else if(result.innerText.includes("-")){
  let operand2 =  result.innerText.slice(result.innerText.indexOf("-")+1)
  let operand1 =  result.innerText.slice(0,result.innerText.indexOf("-"))
  let deci1 = parseInt(operand1, 2)
  let deci2 = parseInt(operand2, 2)
    clear()
    result.innerText =  Number(deci1-deci2).toString(2)
  }else if(result.innerText.includes("*")){

    let operand1 =  result.innerText.slice(0,result.innerText.indexOf("*"))
    let operand2 =  result.innerText.slice(result.innerText.indexOf("*")+1)
    let deci1 = parseInt(operand1, 2)
    let deci2 = parseInt(operand2, 2)
      clear()
      result.innerText =  Number(deci1*deci2).toString(2)
  }else if(result.innerText.includes("/")){

    let operand1 =  result.innerText.slice(0,result.innerText.indexOf("/"))
    let operand2 =  result.innerText.slice(result.innerText.indexOf("/")+1)
    let deci1 = parseInt(operand1, 2)
    let deci2 = parseInt(operand2, 2)
      clear()
      result.innerText =  Number(deci1/deci2).toString(2)
  }


function clear(){
  result.innerText = ''
}
  
}







 





