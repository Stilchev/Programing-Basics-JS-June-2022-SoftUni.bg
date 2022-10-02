function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litersPrep = Number(input[2]);
    let discount = Number(input[3]/100);

    let pensSum = pens * 5.80;
    let markersSum = markers * 7.20;
    let prepSum = litersPrep * 1.20;
    let totalSum = pensSum + markersSum + prepSum;
    let discountSum = totalSum * discount;
    let finalSum = totalSum - discountSum;
    console.log(finalSum);

}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "])
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "])