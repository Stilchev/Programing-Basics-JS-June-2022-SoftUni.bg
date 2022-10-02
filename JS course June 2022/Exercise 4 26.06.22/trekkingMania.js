function trekkingMania(input) {
    let index = 0;
    let groupsNumber = Number(input[index]);
    index++;

    let totalPeople = 0;

    let groupMusala = 0;
    let groupMontBlanc = 0;
    let groupKilimandjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;


    for(let i = 0; i < groupsNumber; i++) {
        let currentGroupSize = Number(input[index]);
        index++;
        totalPeople += currentGroupSize;
        if(currentGroupSize < 6){
            groupMusala += currentGroupSize;
        }else if(currentGroupSize >= 6 && currentGroupSize<= 12) {
            groupMontBlanc += currentGroupSize;
        }else if(currentGroupSize >= 13 && currentGroupSize <= 25) {
            groupKilimandjaro += currentGroupSize;
        }else if(currentGroupSize >= 26 && currentGroupSize <= 40) {
            groupK2 += currentGroupSize;
        }else{
            groupEverest += currentGroupSize;
        }
    }
    let pMusala = groupMusala / totalPeople * 100;
    let pMontBlanc = groupMontBlanc / totalPeople * 100;
    let pKilimandjaro = groupKilimandjaro / totalPeople * 100;
    let pK2 = groupK2 / totalPeople * 100;
    let pEverest = groupEverest / totalPeople * 100;

    console.log(pMusala.toFixed(2) + "%")
    console.log(pMontBlanc.toFixed(2) + "%")
    console.log(pKilimandjaro.toFixed(2) + "%")
    console.log(pK2.toFixed(2) + "%")
    console.log(pEverest.toFixed(2) + "%")
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
