//This is the solution for Valid Braces challenge in Codewars
function validBraces(braces){
    const openBraces = ['{','(','[']
    const closeBraces =['}',')',']']
    let barcesOrder = false
    for( let i = 1; i < braces.length; i++){
      const firstBrace = braces[0]
      let closeBrace =closeBraces[openBraces.indexOf(firstBrace)]
      if( openBraces.includes(firstBrace) ==true && ( i - 1 )% 2 == 0 && closeBrace == braces[i]){
        braces = braces.slice( 1, i ) + braces.slice( i+1 )
        i=0
      }
    }
    if( braces .length ==0 ){
      barcesOrder = true
    }
    return barcesOrder
}
