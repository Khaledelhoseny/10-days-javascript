

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

function reverseString(s) {

    try{


    let split = s.split("")
    let reverse = split.reverse()
    let join = reverse.join("")
    console.log(join)

   

    }
    catch(err){
    console.log (err.message) 
    console.log(s)
    }
    

  

  }


