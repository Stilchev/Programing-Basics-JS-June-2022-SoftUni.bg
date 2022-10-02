function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percentage = Number(input[3]/100);
    let volume = lenght * width * high;
    let volumeLitre = volume / 1000;
    let totalVolume = volumeLitre * (1 - percentage);
    console.log(totalVolume);
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "])
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "])