function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let column = Number(input[2]);

    let places = rows * column;
    let income = 0;

    switch(type) {
        case "Premiere": income = places * 12;break;
        case "Normal": income = places * 7.50;break;
        case "Discount": income = places * 5.00;break;
            
    }
    console.log(`${income.toFixed(2)}`);




}
cinema(["Premiere",
"10",
"12"])
