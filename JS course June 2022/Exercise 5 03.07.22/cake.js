function cake (input) {

    let index = 0;

    let width = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;

    let allPieces = width * hight;
 
  

    let pieceCount = 0;
    let currentInput = input[index];
    index++;
    

    while(currentInput !== "STOP"){
        let piecesEaten = Number(currentInput);
        pieceCount += piecesEaten;

        if (pieceCount >= allPieces){
            let diff = Math.abs(pieceCount - allPieces);
            console.log(`No more cake left! You need ${diff} pieces more.`)
            break;
        }

        currentInput = input[index];
        index++;
        

    
    }
    let diff = Math.abs(pieceCount - allPieces);
    if(currentInput === "STOP"){
        console.log(`${diff} pieces are left.`)
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

