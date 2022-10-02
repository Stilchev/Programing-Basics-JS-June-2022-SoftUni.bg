function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let aparamentPrice = 0;

    switch(month) {
        case "May":
        case "October": 
            
            if(nights > 7 && nights <= 14){
                studioPrice = nights * 50 * 0.95 ;
                aparamentPrice = nights * 65;
                console.log(`Apartment: ${aparamentPrice.toFixed(2)} lv.`);
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            }else if(nights > 14){
                studioPrice = nights * 50 * 0.70;
                aparamentPrice = nights * 65 * 0.90;
                console.log(`Apartment: ${aparamentPrice.toFixed(2)} lv.`);
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            }else {
                studioPrice = nights * 50;
            aparamentPrice = nights * 65;
            console.log(`Apartment: ${aparamentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            }
        
        break;
        case "June":
        case "September": 
            if(nights > 14) {
                studioPrice = nights * 75.20 * 0.80 ;
                aparamentPrice = nights * 68.70 * 0.90;
                console.log(`Apartment: ${aparamentPrice.toFixed(2)} lv.`);
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            } else{
                studioPrice = nights * 75.20;
                aparamentPrice = nights * 68.70;
                console.log(`Apartment: ${aparamentPrice.toFixed(2)} lv.`);
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            }
        break;
        case "July":
        case "August": 
            if(nights > 14) {
                studioPrice = nights * 76;
                aparamentPrice = nights * 77 * 0.90;
                console.log(`Apartment: ${aparamentPrice.toFixed(2)} lv.`);
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`); 
            }else {
                studioPrice = nights * 76;
                aparamentPrice = nights * 77;
                console.log(`Apartment: ${aparamentPrice.toFixed(2)} lv.`);
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

            }
            
        break;
    }
}
hotelRoom(["August",
"20"])
