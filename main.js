


// let name = "khaled" ; 
// try {
//     alert(ahemdeee);
//   }
// catch(err) {
//     console.log (err) 
//   }

  


  // function reverseString(s) {

  //   try{


  //   let split = s.split("")
  //   let reverse = split.reverse()
  //   let join = reverse.join("")
  //   console.log(join)

   

  //   }
  //   catch(err){
  //   console.log ( "the erorr is "  + err.message) 
  //   console.log(s)
  //   }
    

  

  // }



// function vowelsAndConsonants(s) {
// let x = 'aouei'
// let vowelsArr = []
// let constantsArr = []


//     for (let i = 0 ; i<s.length ; i++) {


//         if (x.includes(s[i]) ) {

//           vowelsArr.push(s[i])
            
//         }else{

//           constantsArr.push(s[i])

//         }

        
//     }
//     vowelsArr.concat(constantsArr).forEach(char => console.log(char))

    

// }



// function getCount(objects) {

//   let array = [
//       {
//           x:1 , 
//           y:1
//       },
      
//       {
//           x:2 , 
//           y:3
//       },
//       {
//           x:3 , 
//           y:3
//       },
//       {
//           x:3 , 
//           y:4
//       },
//       {
//           x:4 , 
//           y:5
//       }
      
      
//   ]
//   let count = 0
//   for(let i of array){
    
//     if( i.x == i.y ){
//         count ++  
//     }
//   }

//   return count 

// }


// function isPositive(a) {
//   if(a > 0 ) return("YES")
//   else if(a == 0 ) { throw new Error("Zero Error")}
//   else {throw new Error("Negative Error")}
// }

// try {
//   console.log(isPositive(0));
// } catch (e) {
//   console.log(e.message);
// }


 
// class Polygon {
//   constructor(array){
//       this.array = array
//   }
  
//   perimeter(){
//     let count = 0 ; 
//     for(let arr of this.array){
//       count+=arr
//     }
//     return count 
//   }

// }
// const rectangle = new Polygon([10, 20, 10, 20]);


// class Rectangle {
//   constructor(w, h) {
//       this.w = w;
//       this.h = h;
//   }
//   area(){
//     console.log(this.w*this.h)
//   }
// }

// const area1 = new Rectangle(10,10)




// const letters = new Set(["a","b","c"]);
// letters.forEach (function(value) {

//   console.log(value)
  
// })


// let array = [1,2,3,4]

// function compare(a,b){
//   return a-b
// }

// array.sort(compare)




function secondLargest(array){

  let setArray = new Set( array )
  
  // [1,2,3,4]

  function compare(a,b){

    return a-b
    
  }

  let lastArray = Array.from(setArray).sort(compare)

   console.log(lastArray)

    return Math.max( ...lastArray ) - 1  


}


// class Rectangle {
//   constructor(w, h) {
//       this.w = w;
//       this.h = h;
//   }
// }

// Rectangle.prototype.area = function() {
//   return this.w*this.h
// };

// class Square extends Rectangle{
//     constructor(side){
//         super(side,side)
//     }
// }

// const mySquare = new Square(5)
// const myRect = new Rectangle(3,4)
// console.log(mySquare.area())