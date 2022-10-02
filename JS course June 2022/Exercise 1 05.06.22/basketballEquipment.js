function basketballEquipment(input) {
    let yearTax = Number(input[0]);
    let sneakers = yearTax * 0.60;
    let equip = sneakers * 0.80;
    let ball = equip * 0.25;
    let accessories = ball * 0.20;

    let finalSum = yearTax + sneakers + equip + ball + accessories;
    console.log(finalSum);

}

basketballEquipment(["365 "])
basketballEquipment(["550 "])