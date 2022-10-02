function vacation(input){
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;
    let spendCounter = 0;
    let dayCounter = 0;

    while(currentMoney < neededMoney){
        let action = input[index];
        index++;
        let amaount = Number(input[index]);
        index++;
        dayCounter++;

        switch(action){
            case "spend": 
                currentMoney -= amaount;
                spendCounter++;
                if(currentMoney < 0){
                    currentMoney = 0;
                    
                    
                }
            break;
            case "save" : 
            currentMoney += amaount;
            spendCounter = 0;

            break;
        }
        if(spendCounter === 5){
            break;
        }
    }
    if(spendCounter === 5){
        console.log(`You can't save the money.`);
        console.log(`${dayCounter}`)
    }else {
        console.log(`You saved the money for ${dayCounter} days.`)
    }
}
vacation
([110,
    60,
    "spend",
    10,
    "spend",
    10,
    "spend",
    10,
    "spend",
    10,
    "spend",
    10,])
