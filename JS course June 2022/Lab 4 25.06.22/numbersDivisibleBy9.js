function numbersDivisibleBy9(input) {
    let minNum = Number(input[0]);
    let maxNum = Number(input[1]);

    let sum = 0;
    
    

    for(i = minNum ; i < maxNum; i++){
        if(i % 9 == 0){
        
            sum += i;
            
           
        }
            
    }
    

    console.log(`The sum: ${sum}`);

    let output = "";

    for(i = minNum ; i < maxNum; i++){
        if(i % 9 == 0){
            output = i;
           
            
            console.log(output);
        }
    }

}
numbersDivisibleBy9(["100", "200"])