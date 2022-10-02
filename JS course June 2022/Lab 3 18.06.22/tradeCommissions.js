function tradeCommissions(input) {
    let town = input[0];
    let sum = Number(input[1]);


    if (sum <= 500 && sum >= 0) {
        switch(town){
            case "Sofia": console.log((sum * 0.05).toFixed(2)); break;
            case "Varna": console.log((sum * 0.045).toFixed(2)); break;
            case "Plovdiv": console.log((sum * 0.055).toFixed(2)); break;
            default: console.log('error'); break;
            
        } 
    } else if(sum <= 1000 && sum > 0) {
        
        switch(town){
            case "Sofia": console.log((sum * 0.07).toFixed(2)); break;
            case "Varna": console.log((sum * 0.075).toFixed(2)); break;
            case "Plovdiv": console.log((sum * 0.08).toFixed(2)); break;
            default: console.log('error'); break;
        }
        
    } else if(sum <= 10000 && sum > 0) 
        switch(town){
        case "Sofia": console.log((sum * 0.08).toFixed(2)); break;
        case "Varna": console.log((sum * 0.10).toFixed(2)); break;
        case "Plovdiv": console.log((sum * 0.12).toFixed(2)); break;
        default: console.log('error'); break;
    }  else if (sum > 10000 && sum > 0){
        switch(town){
            case "Sofia": console.log((sum * 0.12).toFixed(2)); break;
            case "Varna": console.log((sum * 0.13).toFixed(2)); break;
            case "Plovdiv": console.log((sum * 0.145).toFixed(2)); break;
            default: console.log('error'); break;
        }
    }
     else {
        console.log("error");
    }

    
   
    
    
    
    
    
}
    
    
   tradeCommissions(["Sofia",
   "1600"])
   
   
    