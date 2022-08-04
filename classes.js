/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(array){
        this.array = array
    }
    
    perimeter(){
      let count = 0 ; 
      for(let arr of this.array){
        count+=arr
      }
      return count 
    }
  
  }
  
  
  