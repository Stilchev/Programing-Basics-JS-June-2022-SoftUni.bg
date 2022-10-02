function examPreparation(input) {
    let index = 0;
    let negativeGradeCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let negativeTaskCounter = 0;
    let sumGrades = 0;
    let countProblems = 0;
    let taskName = "";
    let needBreak = false;

    while(command !== "Enough"){
        taskName = command;
        let taskGrade = Number(input[index]);
        index++;
        countProblems++;
        sumGrades += taskGrade;

        if(taskGrade <= 4){
            negativeTaskCounter++;
            if(negativeTaskCounter === negativeGradeCount){
                needBreak = true;
                break;
            }
        }

        command = input[index];
        index++;

    }
    let avg = sumGrades / countProblems;
    if(needBreak){
        console.log(`You need a break, ${negativeTaskCounter} poor grades.`)
    }else {
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${countProblems}`)
    console.log(`Last problem: ${taskName}`)
    }
    
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
