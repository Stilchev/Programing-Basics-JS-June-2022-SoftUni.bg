function depositCalculator(input) {
    let deposit = Number(input[0]);
    let depositTerm = Number(input[1]);
    let depositInterestPersentage = Number(input[2]/100);
    let finalSum = deposit + depositTerm * ((deposit * depositInterestPersentage) / 12);
    console.log(finalSum);


}
depositCalculator(["200 ",
"3 ",
"5.7 "])
depositCalculator(["2350",
"6 ",
"7 "])
