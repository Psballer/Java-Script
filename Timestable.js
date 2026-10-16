const prompt = require("prompt-sync")();
//let number = Number(prompt("Enter a number: "));
while(true){
let number = Number(prompt("Enter a number: "));
if (Number.isNaN(number)){
    console.log("Enter a vaild number: ");
}else{
    for(let index = 1; index <= 12; index++){
        let multiplication = number * index;
        console.log(number + "x" + index + "=" + multiplication);

    }

break;
}
}
//    console.log(number + "X" + index + "=" + multiplication);


