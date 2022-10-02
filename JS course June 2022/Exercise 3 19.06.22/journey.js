function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination = 0;
    let place = 0;

    if(budget <= 100) {
         destination = "Bulgaria";
        if(season === "summer") {
             place = "Camp";
            price = budget * 0.30;
        } else if(season === "winter"){
             place = "Hotel";
            price = budget * 0.70;
        }
    } else if(budget <= 1000 && budget > 100){
         destination = "Balkans";
        if(season === "summer") {
             place = "Camp";
            price = budget * 0.40;
        } else if(season === "winter"){
             place = "Hotel";
            price = budget * 0.80;
        }  
    }else if(budget > 1000){
        destination = "Europe";
        place = "Hotel";
        price = budget * 0.90;
    }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
journey(["50", "summer"])