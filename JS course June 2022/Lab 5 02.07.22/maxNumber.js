function maxNumber(input) {
    let index = 0;
    let currentInput = input[index];
   

    let biggestNum = -999999;

    while(currentInput !== "Stop"){
        
        
        if(currentInput > biggestNum){
            biggestNum = Number(currentInput)
        }
        currentInput = input[index];
        index++;
    }
    console.log(biggestNum);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
