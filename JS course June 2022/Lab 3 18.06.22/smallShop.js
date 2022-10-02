function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let qunatity = Number(input[2]);

    let sum = 0;

    if(town == "Sofia") {
        switch(product){
            case "coffee": sum = qunatity * 0.50 ; break;
            case "water": sum = qunatity * 0.80 ; break;
            case "beer": sum = qunatity * 1.20 ; break;
            case "sweets": sum = qunatity * 1.45 ; break;
            case "peanuts": sum = qunatity * 1.60 ; break;       
        }

    }else if(town == "Plovdiv"){
        switch(product){
            case "coffee": sum = qunatity * 0.40 ; break;
            case "water": sum = qunatity * 0.70 ; break;
            case "beer": sum = qunatity * 1.15 ; break;
            case "sweets": sum = qunatity * 1.30 ; break;
            case "peanuts": sum = qunatity * 1.50 ; break;
        }
    }else if(town == "Varna"){
        switch(product){
            case "coffee": sum = qunatity * 0.45 ; break;
            case "water": sum = qunatity * 0.70 ; break;
            case "beer": sum = qunatity * 1.10 ; break;
            case "sweets": sum = qunatity * 1.35 ; break;
            case "peanuts": sum = qunatity * 1.55 ; break;
    }
}
console.log(sum);
}
smallShop(["coffee",
"Varna",
"2"])
