let button0 = document.querySelector("#btn0")
let button1 = document.querySelector("#btn1")
let buttonSum = document.querySelector("#btnSum")
let buttonEqual = document.querySelector("#btnEql")
let buttonSub = document.querySelector("#btnSub")
let buttonMul = document.querySelector("#btnMul")
let buttonDiv = document.querySelector("#btnDiv")
let buttonClear = document.querySelector("#btnClr")
let result = document.querySelector("#res")


button0.addEventListener("click", showButton0)


function showButton0() {
  if (bolean) {
    clearFunc()
    bolean = false
  }
  result.innerText += button0.innerText
  console.log(result.innerText)

}
button1.addEventListener("click", showButton1)

function showButton1() {
  if (bolean) {
    clearFunc()
    bolean = false
  }
  result.innerText += button1.innerText

  console.log(result.innerText)

}




// buttonSum.addEventListener("click", sumFunc)
// function sumFunc() {
//   let lastIndex = result.innerText[result.innerText.length-1]  
//   console.log(lastIndex)

//   if(lastIndex==='0'|lastIndex==='1'){
//     result.innerText += buttonSum.innerText
//   }else if(lastIndex==='+'){  
//     console.log("dont")
//   }else if(lastIndex==='-'|lastIndex==='*'|lastIndex==='/'){
//     result.innerText =  result.innerText.slice(0 , result.innerText.indexOf(lastIndex))   
//     result.innerText+=buttonSum.innerText
//   }


// }



buttonSum.addEventListener("click", sumFunc)
function sumFunc() {
  
  operand=result.innerText
 
  let regex = /[\+\-\/\*]/ig   ; 
  if(regex.test(operand)){
    operand = operand.replace(regex,"+")
  }else{
    operand+="+"
    

  } 
  result.innerText = operand
}




buttonSub.addEventListener("click", subFunc)
function subFunc() {

  operand=result.innerText
  let regex = /[\+\-\/\*]/ig ; 
  if(regex.test(operand)){
    operand = operand.replace(regex,"-")
  }else{
    operand+="-"
    
  } 
  result.innerText = operand



}


buttonMul.addEventListener("click", mulFunc)
function mulFunc() {

  operand=result.innerText
  let regex = /[\+\-\/\*]/ig ; 
  if(regex.test(operand)){
    operand = operand.replace(regex,"*")
  }else{
    operand+="*"
    
  } 
  result.innerText = operand

}

buttonDiv.addEventListener("click", divFunc)
function divFunc() {

  operand=result.innerText
  let regex = /[\+\-\/\*]/ig ; 
  if(regex.test(operand)){
    operand = operand.replace(regex,"/")
  }else{
    operand+="/"
    
  } 
  result.innerText = operand

}




buttonClear.addEventListener("click", clearFunc)
function clearFunc() {
  console.log("clearr")

  // result.innerText = result.innerText.substring(result.innerText.length);
  result.innerText = ''

}




buttonEqual.addEventListener("click", equalFunc)
let bolean
function equalFunc() {

  if (result.innerText.includes("+")) {
    let operand1 = result.innerText.slice(result.innerText.indexOf("+") + 1)
    let operand2 = result.innerText.slice(0, result.innerText.indexOf("+"))
    console.log(operand1)
    let deci1 = parseInt(operand1, 2)
    let deci2 = parseInt(operand2, 2)
    clear()
    result.innerText = Number(deci1 + deci2).toString(2)
    bolean = true

  } else if (result.innerText.includes("-")) {
    let operand2 = result.innerText.slice(result.innerText.indexOf("-") + 1)
    let operand1 = result.innerText.slice(0, result.innerText.indexOf("-"))
    let deci1 = parseInt(operand1, 2)
    let deci2 = parseInt(operand2, 2)
    clear()
    result.innerText = Number(deci1 - deci2).toString(2)
  } else if (result.innerText.includes("*")) {

    let operand1 = result.innerText.slice(0, result.innerText.indexOf("*"))
    let operand2 = result.innerText.slice(result.innerText.indexOf("*") + 1)
    let deci1 = parseInt(operand1, 2)
    let deci2 = parseInt(operand2, 2)
    clear()
    result.innerText = Number(deci1 * deci2).toString(2)
  } else if (result.innerText.includes("/")) {

    let operand1 = result.innerText.slice(0, result.innerText.indexOf("/"))
    let operand2 = result.innerText.slice(result.innerText.indexOf("/") + 1)
    let deci1 = parseInt(operand1, 2)
    let deci2 = parseInt(operand2, 2)
    clear()
    result.innerText = Number(deci1 / deci2).toString(2)
  }


  function clear() {
    result.innerText = ''
  }

}










