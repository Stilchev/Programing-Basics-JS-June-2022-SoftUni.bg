function skiTrip(input) {
    let days = Number((input[0])-1);
    let type = input[1];
    let grade = input[2];

    let sum = 0;
 // "room for one person", "apartment" или "president apartment"
    switch(type) {
        case "room for one person": 
            sum = days * 18.00;
                
        
            break;
        case "apartment": 
            sum = days * 25;
            if(days < 10){
                sum = sum * 0.70;
               
            } else if(days >= 10 && days <= 15) {
                sum = sum * 0.65;
               
            } else if(days > 15){
                sum = sum * 0.50;
                
            }
           
            break;
        case "president apartment": 
        sum = days * 35;
        if(days < 10){
            sum = sum * 0.90;
           
        } else if(days >= 10 && days <= 15) {
            sum = sum * 0.85;
            
        } else if(days > 15){
            sum = sum * 0.80;
           
        }
        
        break;
    }
    if(grade == "positive") {
        sum = sum * 1.25;
        console.log(sum.toFixed(2))
    }else if(grade === "negative") {
        sum = sum * 0.90;
        console.log(sum.toFixed(2));
    }


}
skiTrip(["14",
"apartment",
"positive"])
