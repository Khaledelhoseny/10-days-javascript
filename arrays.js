

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
let heighst = 0 ;
let secondHeighst = 0 ;
function getSecondLargest(nums) {
    for(let i = 0 ; i < nums.length ; i++  ){
        if(nums[i] > heighst ){  //4>5
            secondHeighst = heighst // secondHeighst = 1
            heighst = nums[i] // heighst = 5
            
        }else if( nums[i] > secondHeighst){ //3 > 4
            secondHeighst = nums[i]  //secondHeighst = 4   
        }
    }
    return secondHeighst ; 
}

