// let button0 = document.querySelector("#btn0") 
// let button1 = document.querySelector("#btn1")
// let buttonSum = document.querySelector("#btnSum")
// let buttonEqual = document.querySelector("#btnEql")
// let result = document.querySelector("#res")

// button0.addEventListener("click" , showButton0 )

// function showButton0(){
  
    
//   result.innerText+=button0.innerText

//   let x = result.innerText
//   console.log(x)

  
// }


// button1.addEventListener("click" , showButton1 )
// function showButton1(){
   
//     result.innerText +=  button1.innerText 
//     let y = result.innerText
//     console.log(y)

    
// }

// buttonSum.addEventListener("click" , showbuttonSum )
// function showbuttonSum(){
   
//     result.innerText +=  buttonSum.innerText 
// }





// buttonEqual.addEventListener("click" ,equalFunc)


// function equalFunc(){

//     let deci1 = parseInt(x, 2); //decimal number
//     let deci2 = parseInt(y, 2); //decimal number
//     console.log(deci1)
//     // let resultDecimals = deci1 + deci2 
//     // console.log(resultDecimals)

// }


let button0 = document.querySelector("#btn0") 
let button1 = document.querySelector("#btn1")
let buttonSum = document.querySelector("#btnSum")
let buttonEqual = document.querySelector("#btnEql")
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


// buttonSum.addEventListener("click" , showbuttonSum )
// function showbuttonSum(){
   
//     result.innerText +=  buttonSum.innerText 
// }


// result.innerText = result0 + result1


buttonEqual.addEventListener("click" ,equalFunc)

function equalFunc(){

  
  console.log(result.innerText) 
  let deci = parseInt(result.innerText, 2);
  console.log(deci)
  
    // let deci1 = parseInt(result, 2); //decimal number
    //  //decimal number
    // console.log(deci1)
        
    // let resultDecimals = deci1 + deci2 
    // console.log(resultDecimals)

}
