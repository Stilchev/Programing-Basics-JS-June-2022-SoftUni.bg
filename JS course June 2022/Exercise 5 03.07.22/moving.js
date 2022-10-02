function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;

    let placeVolume = width * length * hight;

    let command = input[index];
    index++;


    while(command !== "Done"){
        let box = Number(command);
        placeVolume -= box;
        
        if(placeVolume < 0){
            break;
        }
        command = input[index];
        index++;

    }

    if(placeVolume > 0){
        console.log(`${placeVolume} Cubic meters left.`)
    }else {
        
        console.log(`No more free space! You need ${Math.abs(placeVolume)} Cubic meters more.`)
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

