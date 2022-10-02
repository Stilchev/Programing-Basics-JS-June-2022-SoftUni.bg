function lunchBreak(input) {
    let serial = input[0];
    let episodeLenght = Number(input[1]);
    let restLenght = Number(input[2]);

    let lunchTime = restLenght / 8;
    let restTime = restLenght / 4;

    let sum = lunchTime + restTime;
    let finalSum = restLenght - sum;

    if (finalSum >= episodeLenght) {
        let diff = Math.ceil(finalSum - episodeLenght);
        console.log(`You have enough time to watch ${serial} and left with ${diff} minutes free time.`);
    } else {
        let diff = Math.floor(finalSum - episodeLenght);
        diff = Math.abs(diff);
        console.log(`You don't have enough time to watch ${serial}, you need ${diff} more minutes.`)
    }

}
lunchBreak(["Teen Wolf",
"48",
"60"])
