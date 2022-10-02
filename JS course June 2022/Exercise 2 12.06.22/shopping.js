function shopping(input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number (input[3]);

    let videoCardSum = videoCard * 250;
    let processorsPrice = videoCardSum * 0.35;
    let ramPrice = videoCardSum * 0.10;
    let sum = videoCardSum + processors * processorsPrice + ram * ramPrice;
    if (videoCard > processors) {
        sum = sum * 0.85;
    }

    if (budget >= sum) {
        let diff = budget - sum;
        console.log(`You have ${diff.toFixed(2)} leva left!`);

    }else {
        diff = Math.abs(budget - sum);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
shopping(["900",
"2",
"1",
"3"])