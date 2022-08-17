// function getMaxLessThanK(n,k){


//     let resulArray = []
//     for(let i = 0 ; i<s.length ; i++){
    
//         let newS =  s.slice(s[i])
        
//         for(let j = 0 ; j<newS.length ; j++){
    
//             let result = s[i] & newS[j]        
//             resulArray.push(result)
            
         
//          }
         
         
//     }
    
//     console.log(resulArray)
    
//     for(let i = 0 ; i<resulArray.length ; i++){
    
//         if (resulArray[i]<k ){
//             console.log(resulArray[i] )
//         }
        
//     }
    
//     }
    


// let s = [1,2,3,4,5,6,7,8]


// let resulArray = []
// for(let i = 0 ; i<s.length ; i++){

//     let newS =  s.slice(s[i])
    
//     for(let j = 0 ; j<newS.length ; j++){

//         let result = s[i] & newS[j]        
//         resulArray.push(result)
        
     
//      }
     
// }

// // console.log(resulArray)
// let maxArray = []

// for(let i = 0 ; i<resulArray.length ; i++){

//     if (resulArray[i] < 5 ){
//         maxArray.push(resulArray[i])
        
//     }
    
// }
// console.log( Math.max(...maxArray))





// s == n , k = 5



let finalResult = 0 
let secondHeighst = 0
function getMaxLessThanK(n,k){

let input_array =  Array.from(Array(n+1).keys()).slice(1)

for(let i = 0 ; i<input_array.length ; i++){

    let newS =  input_array.slice(input_array[i])
    
    for(let j = 1 ; j<newS.length ; j++){
        
       let andResult = input_array[i] & newS[j]   //5
      
      //  if(finalResult<k){ 
      //   finalResult = andResult
      //   secondHeighst = finalResult
           
      //  }
       
     }
     
}
console.log(andResult)




// let maxArray = []
// for(let i = 0 ; i < resulArray.length ; i++){  //resultArray = [0]

//     if (resulArray[i] < k  ){
//         maxArray.push(resulArray[i])
        
//     }
    
// }
// console.log(maxArray)
// resulArray =[]
// return Math.max(...maxArray)

}




console.log("kjaled")