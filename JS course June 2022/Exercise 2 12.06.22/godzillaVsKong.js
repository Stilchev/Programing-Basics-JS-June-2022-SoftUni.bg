function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothes = Number(input[2]);

    let decorPrice = budget * 0.10;
    let clothesPrice = clothes * statistCount;
    if (statistCount > 150) {
        clothesPrice = clothesPrice * 0.90;
    }
    let expenses = decorPrice + clothesPrice;

    if (budget < expenses) {
        let diff = Math.abs(budget - expenses);
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);

    }else {
        let diff = (budget - expenses);
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}   
godzillaVsKong(["20000",
"120",
"55.5"])
