function excursionCalculator(input) {
    let people = Number(input[0]);
    let season = input[1];

    let totalPrice = 0;

    switch(season) {
        case "spring":
            if(people <= 5){
                totalPrice = people * 50;
            }else {
                totalPrice = people * 48;
            }
        break;
        case "summer" : if(people <= 5){
            totalPrice = (people * 48.50) * 0.85;
        }else {
            totalPrice = (people * 45) * 0.85;
        }
        break;
        case "autumn" : if(people <= 5){
            totalPrice = people * 60;
        }else {
            totalPrice = people * 49.50;
        }
        break;
        case "winter" : if(people <= 5){
            totalPrice = (people * 86) + (0.08 * people * 86);
        }else {
            totalPrice = (people * 85) + (0.08 * people * 85);
        }
        break;

    }
    console.log(`${totalPrice.toFixed(2)} leva.`)
}
excursionCalculator(["20",
"winter"])

