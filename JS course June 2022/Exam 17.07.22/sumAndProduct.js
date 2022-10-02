function sumAndProduct(input) {
    let num = Number(input[0]);

    let isFound = false

    for(let a = 1; a <= 9; a++){
        for(let b = 9; b >= a; b--){
            for(let c = 1; c < 9; c++){
                
                for(let d = 9; d >= c; d--){
                    let sum = a + b + c + d;
                    let product = a * b * c * d
                    let final = product / sum;
                    finalNum = num % 3
                    if((sum) === (product) && (num % 10 === 5)){
                        
                        console.log(`${a}`+`${b}`+`${c}`+`${d}`)
                        isFound = true;
                        break;
                    }else if(Math.floor(final) == 3 && finalNum == 0){
                        console.log(`${d}`+`${c}`+`${b}`+`${a}`)
                        isFound = true;
                        break;
                    }

                    if(isFound){
                        break;
                    }
                     
        
                }
                if(isFound){
                    break;
                }
            }
            if(isFound){
                break;
            }
            
        }
        if(isFound){
            break;
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`Nothing found`)
    }
}
sumAndProduct(["123"])