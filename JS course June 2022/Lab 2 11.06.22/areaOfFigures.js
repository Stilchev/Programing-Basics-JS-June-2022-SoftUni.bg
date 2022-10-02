function areaOfFigures(input) {
    let figure = input[0];
    if (figure == "square") {
        let side = Number(input[1]);
        let area = side * side;
        console.log(area.toFixed(3));
    }else if (figure == "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    }else if (figure == "circle") {
        let radius = Number(input[1]);
        area = Math.PI*(radius*radius)
        console.log(area.toFixed(3));
    }else if (figure == "triangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["triangle",
"4.5",
"20"])


