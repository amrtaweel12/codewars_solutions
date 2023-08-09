// This is my solution for RGB To Hex Conversion challenge in code wars. 
// This challenge kata level is 5
function rgb(r, g, b){
    let rgbInts = [r, g, b ]
    for(let i = 0; i < rgbInts.length; i++){
        if (rgbInts[i] > 255 ){
            rgbInts[i] = 255
        }else if(rgbInts[i] < 0){
            rgbInts[i] = 0
        }
    }
    r = rgbInts[0]
    g = rgbInts[1]
    b = rgbInts[2]
   let hexSymbolsAndNum = [ '0', '1', '2', '3' , '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ]
   let redHex = hexSymbolsAndNum[ parseInt( r / 16 ) ] + hexSymbolsAndNum[ r % 16 ]
   let greenHex = hexSymbolsAndNum[ parseInt( g / 16 ) ] + hexSymbolsAndNum[ g % 16 ]
   let blueHex = hexSymbolsAndNum[ parseInt( b / 16 ) ] + hexSymbolsAndNum[ b % 16 ]
   let hex = redHex + greenHex + blueHex
   return hex
  }
  console.log(rgb (173,255,47))