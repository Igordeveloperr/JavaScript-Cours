if (2*9 === 18) {
    console.log("yes");
}
else{
    console.log("no");
}

let number = prompt("Your number");
if (number.length >= 5) {
    console.log("number >= 5");
}
else if (number.length < 5 && number.length > 3) {
    console.log("number = 4");
}
else{
    console.log("short number");
}