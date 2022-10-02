function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let index = 0;
    let exlude = 0;

    while(grades <= 12){
        index++;
        let grade = Number(input[index]);
        
        if(grade >= 4){
            grades++;
            sum += grade;
        }else if(grade < 4){
            exlude++;
            break;
            
        }
    }
    let avgGrade = sum / 12;
    
    if(exlude >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`)
    }else {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }
    
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

