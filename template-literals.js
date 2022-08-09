function sides(literals, ...expressions) {
    
    
    sortedArray = []
    
    let area = expressions[0]
    let peri= expressions[1]
    
      let s1 = ( peri + Math.sqrt(peri*peri-16*area) ) / 4 
      
      let s2 = ( peri - Math.sqrt(peri*peri-16*area) ) / 4 
      
      sortedArray.push(s1 , s2)
      sortedArray.sort(function(a, b) {
        return a - b;
        
      })
      
      return sortedArray
    
        
    }
    