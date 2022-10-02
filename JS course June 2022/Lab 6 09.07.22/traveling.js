function traveling(input) {
    let destination = "";
    let index = 0;

    while(destination !== "End"){
        destination = input[index];
        index++;
        let price = Number(input[index]);
        index++;
        for(let totalSave = 0; totalSave <= price; totalSave++){
            let currentSave = Number(input[index]);
            index++;
            totalSave += currentSave;
            if(totalSave >= price){
                console.log(`Going to ${destination}!`)
            }
        }
    }
    
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

