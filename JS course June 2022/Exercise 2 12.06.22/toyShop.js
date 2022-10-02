function toyShop(input) {
    let hollidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let price = puzzleCount * 2.60 + dollCount * 3.00 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let pieces = puzzleCount + dollCount + bears + minions + trucks;
    if (pieces >= 50) {
        price = price * 0.75;
    }

    let moneyForRent = price * 0.10;
    let finalSum = price - moneyForRent;

    if (finalSum >= hollidayPrice) {
        let restSum = finalSum - hollidayPrice;
        console.log(`Yes! ${restSum.toFixed(2)} lv left.`)
    }else {
        let notEnoughMoney = Math.abs(finalSum - hollidayPrice);
        console.log(`Not enough money! ${notEnoughMoney.toFixed(2)} lv needed.`);
    }


}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])