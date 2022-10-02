function hairSalon(input) {
    let index = 0;
    let target = Number(input[index]);

    let income = 0;

    let command = input[index];
    index++;

    while(command != "closed"){
        command = input[index];
        index++
        let secondCommand = input[index];
        index++
        if(income >= target){
            console.log(`You have reached your target for the day!`)
            break;
        }
        switch(command){
            case "haircut": 
                if(secondCommand == "mens"){
                    income += 15;
                }else if (secondCommand == "ladies"){
                    income += 20;
                }else {
                    income += 10;
                }
            break;
            case "color" : 
                if(secondCommand == "touch up"){
                    income += 20;
                }else if(secondCommand == "full color"){
                    income += 30
                }
            break;
        }
    }
    if(income < target){
        console.log(`Target not reached! You need ${target - income}lv. more.`)
    }
    console.log(`Earned money: ${income}lv.`)
}
hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])


