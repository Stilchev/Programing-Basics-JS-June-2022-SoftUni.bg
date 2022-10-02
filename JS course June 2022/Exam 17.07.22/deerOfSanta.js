function deerOfSanta(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let deerOneFoodDaily = Number(input[2]);
    let deerTwoFoodDaily = Number(input[3]);
    let deerThreeFoodDaily = Number(input[4]);

    let neededFood = (deerOneFoodDaily + deerTwoFoodDaily + deerThreeFoodDaily) * days;

    if(neededFood <= food) {
        let res = food - neededFood;
        console.log(`${Math.floor(res)} kilos of food left.`)
    }else {
        let diff = neededFood - food;
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

