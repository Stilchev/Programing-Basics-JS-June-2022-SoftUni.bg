function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let counter = 0;
    let isFound = false;

    for(let i = start; i <= end; i++){
        for(let z = start; z <= end; z++){
            let res = i + z;
            counter++;
            if(res === magic){
                console.log(`Combination N:${counter} (${i} + ${z} = ${magic})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magic}`)
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])
