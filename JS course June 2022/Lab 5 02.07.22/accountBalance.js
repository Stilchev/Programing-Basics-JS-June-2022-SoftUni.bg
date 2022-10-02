function accountBalance(input) {
    let totalSum = 0;
   

    for(let index = 0; index < input.length ; index++) {
        let currentSum = input[index];

        if(currentSum == "NoMoreMoney"){
            break;
        }
        let currentSumNum = Number(currentSum);
        
       
        

        if(currentSum < 0){
            console.log("Invalid operation!");
            break;
            
        }
        console.log(`Increase: ${currentSumNum.toFixed(2)}`);
        totalSum += currentSumNum;
    }
    
    console.log(`Total: ${totalSum.toFixed(2)}`)
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
