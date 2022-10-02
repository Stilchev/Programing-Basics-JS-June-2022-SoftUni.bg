function oscars(input) {
    let index = 0;
    let actor = input[index];
    index++;

    let pointsFromAcademy = Number(input[index]);
    index++;

    let numberJury = Number(input[index]);
    index++;

    let totalPoints = pointsFromAcademy;
    let currentPoints = 0;

    

    for(let i = 0 ; i < numberJury ; i++) {
        let currentName = input[index];
        index++;
        let pointsFromCurrentJury = Number(input[index]);
        index++;
        currentPoints = (currentName.length * pointsFromCurrentJury) / 2;
        totalPoints += currentPoints;
        if (totalPoints > 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
    }
    
    }
    if(totalPoints < 1250.5){
        let res = Math.abs(totalPoints - 1250.50);
        console.log(`Sorry, ${actor} you need ${res.toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

