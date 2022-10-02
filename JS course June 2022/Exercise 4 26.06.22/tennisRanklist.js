function tennisRanklist(input) {
    let index = 0;

    let tournamentCount = Number(input[index]);
    index++;

    let startPoints = Number(input[index]);
    index++;

    let totalPoints = startPoints;
    let points = 0;
    let wonTournaments = 0;
    

    for(let i = 0; i < tournamentCount; i++) {
        let tournamentResult = input[index];
        index++;
        switch(tournamentResult){
            case "W": totalPoints += 2000;
            points += 2000;
            wonTournaments++;
            break;
            case "F" : totalPoints += 1200;
            points += 1200;
            break;
            case "SF" : totalPoints += 720;
            points += 720;
            break;
        }
    }

    let averagePoints = Math.floor(points / tournamentCount);
    let percentWonTournaments = wonTournaments / tournamentCount * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(percentWonTournaments.toFixed(2) + "%");

}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
