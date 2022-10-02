function petShop(input) {
    let priceDogFood = 2.50;
    let priceCatFood = 4.00;
    let numberDogFoods = Number(input[0]);
    let numberCatFoods = Number(input[1]);
    let money = (numberDogFoods * priceDogFood)+(numberCatFoods*priceCatFood)

    console.log(money);

}
petShop(["5 ",
"4 "])
petShop(["13",
"9"])