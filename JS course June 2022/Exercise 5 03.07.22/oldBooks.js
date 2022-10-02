function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;

    let bookFound = false;
    let nextBookName = input[index]

    while(nextBookName !== "No More Books"){
        if(nextBookName === favouriteBook){
            bookFound = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }

    if(bookFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`)
    }else {
        console.log(`You checked ${index - 1} books and found it.`)
    }
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])
