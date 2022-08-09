function getMaxLessThanK(n,k){


    let resulArray = []
    for(let i = 0 ; i<s.length ; i++){
    
        let newS =  s.slice(s[i])
        
        for(let j = 0 ; j<newS.length ; j++){
    
            let result = s[i] & newS[j]        
            resulArray.push(result)
            
         
         }
         
         
    }
    
    console.log(resulArray)
    
    for(let i = 0 ; i<resulArray.length ; i++){
    
        if (resulArray[i]<k ){
            console.log(resulArray[i] )
        }
        
    }
    
    }
    