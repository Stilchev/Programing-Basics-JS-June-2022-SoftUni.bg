function cleverLily(input) {
    let years = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let sum = 0;
    let moneyGift = 10;
    let stolenMoney = 0;

    for(let i = 1;i <= years ; i++){
        if(i % 2 === 0){
            sum += moneyGift;
            moneyGift +=10;
            stolenMoney++;
        }else{
            toyCount++
        }
    }

    let toyMoney = toyCount * toyPrice;

    let finalSum = sum + toyMoney - stolenMoney;
    let res = Math.abs(finalSum - washMachinePrice);
    if(finalSum >= washMachinePrice){
        console.log(`Yes! ${res.toFixed(2)}`)
    }else (
        console.log(`No! ${res.toFixed(2)}`)
    )
}
cleverLily(["10",
"170.00",
"6"])

