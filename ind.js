function repeatString(str, count) {
    let repeatedString = '';
    for (i = 0; i < count; i++) {
        repeatedString += str;
    }
     return repeatedString;
}
console.log(repeatString('Строка', 3));