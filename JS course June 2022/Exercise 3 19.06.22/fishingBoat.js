function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let price = 0;

    switch(season){
        case "Spring": boatPrice = 3000; break;
        case "Summer": boatPrice = 4200;break;
        case "Autumn": boatPrice = 4200;break;
        case "Winter": boatPrice = 2600;break;
    }
    if(fishermen <= 6){
        price = boatPrice * 0.90;
    }else if(fishermen >= 7 && fishermen <= 11){
        price = boatPrice * 0.85;
    }else if(fishermen >= 12){
        price = boatPrice * 0.75;
    }

    if(fishermen % 2 === 0 && season !== "Autumn"){
        price = price * 0.95
    }
    
    if(budget >= price) {
        let diff = Math.abs(budget - price);
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        let diff = Math.abs(budget - price);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000",
"Summer",
"11"])
