console.log("guess a number between 100 to 1000");
let a = Math.floor(Math.random() * 1000);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: " enter your guess number:" });
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number is correct");
        break;
    }
    else {
        console.log("sorry try again");
    }
    if (a > ans) {
        console.log("hint: number is higher ");
    }
    else {
        console.log("hint: number is lower");
    }
    console.log("GAME OVER");
}
