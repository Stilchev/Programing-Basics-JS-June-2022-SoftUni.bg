function histogram(input) {
    let num = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for(let i = 1; i <= num ; i++) {
        let currentNum = Number(input[i]);
        if(currentNum < 200) {
            p1Count++;
        }else if(currentNum >= 200 && currentNum < 400){
            p2Count++;
        }else if(currentNum >= 400 && currentNum < 600){
            p3Count++;
        }else if(currentNum >= 600 && currentNum < 800){
            p4Count++;
        }else{
            p5Count++;
        }
    }
    let p1 = p1Count / num * 100;
    let p2 = p2Count / num * 100;
    let p3 = p3Count / num * 100;
    let p4 = p4Count / num * 100;
    let p5 = p5Count / num * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}
    
histogram(["3",
"1",
"2",
"999"])
