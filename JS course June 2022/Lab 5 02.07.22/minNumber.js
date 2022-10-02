function minNumber(input) {
    let index = 0;
    let currentInput = input[index];
   

    let lowestNum = Number.MAX_SAFE_INTEGER;

    while(currentInput !== "Stop"){
        
        
        if(currentInput < lowestNum){
            lowestNum = Number(currentInput)
        }
        currentInput = input[index];
        index++;
    }
    console.log(lowestNum);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
