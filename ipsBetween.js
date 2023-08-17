// This is the solution for Count IP Addresses challenge 
// This challenge level is 5
function ipsBetween(start, end){
    let endArray = end.split('.')
    endaArray = endArray.reverse()
    let startArray = start.split('.')
    startArray = startArray.reverse()
    let diffrent = []
    let answer = 0
    for( let i = 0; i < 4; i++ ){
      diffrent.push( parseInt( endArray[i] ) - parseInt( startArray[i] ) )
      answer += diffrent[i] * 256 ** i
    }
    
    return answer
  }