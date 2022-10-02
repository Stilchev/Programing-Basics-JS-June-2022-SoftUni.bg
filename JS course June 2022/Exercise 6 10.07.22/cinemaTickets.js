function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicket = 0;

    while(command !== "Finish"){
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let soldTicket = 0
        let tempCommand = input[index];
        index++;

        while(tempCommand !== "End"){
            let ticket = tempCommand;
            soldTicket++;
            switch(ticket){
                case "student" : studentCounter++;
                break;
                case "standard" : standardCounter++;
                break;
                case "kid" : kidCounter++;
                break;

            }
            if(freeSpace === soldTicket){
                break;
            }

            tempCommand = input[index];
            index++;
        }
        totalTicket += soldTicket;
        let percentage = soldTicket / freeSpace * 100
        console.log(`${name} - ${percentage.toFixed(2)}% full.`)


        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTicket}`);
    let pStudent = studentCounter / totalTicket * 100;
    let pStandard = standardCounter / totalTicket * 100;
    let pKid = kidCounter / totalTicket * 100;
    console.log(`${pStudent.toFixed(2)}% student tickets.`);
    console.log(`${pStandard.toFixed(2)}% standard tickets.`);
    console.log(`${pKid.toFixed(2)}% kids tickets.`)
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])

