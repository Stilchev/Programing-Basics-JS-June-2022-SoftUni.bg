function yardGreening(input) {
    let pricePerSquareMeter = 7.61;
    let area = Number(input[0]);
    let price = pricePerSquareMeter * area;
    let discoutedPrice = price * 0.82;
    let discoutAmaount = price * 0.18;
    console.log(`The final price is: ${discoutedPrice} lv.`);
    console.log(`The discount is: ${discoutAmaount} lv.`);


    
}
yardGreening(["550"])
yardGreening(["150"])