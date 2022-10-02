function vacationBooksList(input) {
    let pagesPerBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let hoursPerBook = pagesPerBook / pagesPerHour;
    let hoursPerDay = hoursPerBook / daysPerBook;
    console.log(hoursPerDay);

}
vacationBooksList(["212 ",
"20 ",
"2 "])
vacationBooksList(["432 ",
"15 ",
"4 "])