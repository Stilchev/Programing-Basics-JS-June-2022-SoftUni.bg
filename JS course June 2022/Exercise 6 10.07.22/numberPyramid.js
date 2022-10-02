function numberPyramid(input) {
    let num = Number(input[0]);

    let currentLine = ""
    let isBigger = false;
    let current = 1;
    for(let row = 1; row <= num ; row++){
        for(let col = 1; col <= row; col++){
            if(current > num){
                isBigger = true;
                break;
            }
            currentLine += current + " ";
            current++;
        }
        console.log(currentLine);
        currentLine = "";
        if(isBigger){
            break;
        }
    }
}
numberPyramid(["7"])