function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    let money = salary;

    for(let i = 2;i <= input.length ; i++){
        let tabName = input[i];
       switch (tabName) {
        case "Facebook": money -= 150;break;
        case "Instagram": money -= 100;break;
        case "Reddit": money -= 50;break;
         if(money <= 0){
            break;
            
            
         }
       }
        
    }
    if(money > 0){
        console.log(money);
    }else console.log(`You have lost your salary.`)
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

