function multiplicationTable(input) {
    let num = Number(input[0]);

    for(i = 1 ; i <= 10 ; i++) {
        let result = num * i;
        console.log(`${i} * ${num} = ${result}`);
    }
}
multiplicationTable(["5"])