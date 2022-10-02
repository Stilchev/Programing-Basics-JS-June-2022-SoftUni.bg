function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let m = Number(input[1]);
    let timePerM = Number(input[2]);

    let slow = Math.floor(m / 15);
    let slowTime = slow * 12.5;
    let ivanchoTime = m * timePerM + slowTime;

    if (ivanchoTime < record) {
        let diff
        console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`);

    }else {
        let diff = Math.abs(record - ivanchoTime);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["10464",
"1500",
"20"])