function repainting(input) {
    let naylon = Number(input[0]);
    let dye = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);
    let material = ((naylon + 2) * 1.50 ) + ((dye*1.1) * 14.50) + (razreditel * 5) + 0.40;
    let workCost = material * 0.30 * hours;
    let finalCost = material + workCost;
    console.log(finalCost);

}
repainting(["10 ",
"11 ",
"4 ",
"8 "])
repainting(["5 ",
"10 ",
"10 ",
"1 "])