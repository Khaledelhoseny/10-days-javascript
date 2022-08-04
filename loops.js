

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let x = 'aouei'
    let vowelsArr = []
    let constantsArr = []
    
    
        for (let i = 0 ; i<s.length ; i++) {
    
    
            if (x.includes(s[i]) ) {
    
              vowelsArr.push(s[i])
                
            }else{
    
              constantsArr.push(s[i])
    
            }
    
            
        }
        vowelsArr.concat(constantsArr).forEach(char => console.log(char))
    
        
    
    }
    
    
      
    
    