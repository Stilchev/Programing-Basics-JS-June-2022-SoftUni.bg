function combinations(input) {
    let num = Number(input[0]);

    let combinationCounter = 0;

    for(let x = 0; x <= num; x++){
        for(let y = 0; y <= num; y++){
            for(let z = 0; z <= num; z++){
                if(x + y + z === num){
                    combinationCounter++;
                }
            }
        }
    }
    console.log(combinationCounter)
}
combinations(["25"])