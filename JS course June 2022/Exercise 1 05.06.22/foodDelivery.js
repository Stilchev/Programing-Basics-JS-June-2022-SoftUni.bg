function foodDelivery(input) {
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let deliverySum = (chikenMenu * 10.35)+(fishMenu * 12.40)+(veganMenu * 8.15) ;
    let finalSum = deliverySum * 1.20;

    console.log(finalSum + 2.50);

}
foodDelivery(["2 ",
"4 ",
"3 "])
foodDelivery(["9 ",
"2 ",
"6 "])