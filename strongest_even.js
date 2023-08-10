// Solution for Strongest Even challenge in codears
// This challenge is 6 kata 
function strongestEven(n, m){
   let oddNum =1
   let mLog = parseInt(Math.log(m) / Math.log(2))
   console.log(Math.log(n) / Math.log(2))
   for (let i = mLog ; i > 0; i--){
    for(let z = 1; z > 0; z += 2){
        let value = 2 ** i *z;
        if(value > m ){
            break
        }else if(value <=m &&  value>= n){
            return value;
        }
    }
   }
   return oddNum
  }

