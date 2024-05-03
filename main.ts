#! /usr/bin/env node

import inquirer from "inquirer";
const quiz: {
    questionNo1: string;
    questionNo2: string;
    questionNo3: string;
    questionNo4: string;
    questionNo5: string;
} = await inquirer.prompt([
    {
        name: "questionNo1",
        type: "list",
        message: "Q1: What is the name of the satelite launched by Pakistan's first moon mission?",
        choices: ["a) iCube Roshan" , "b) iCube Aftab" , "c) iCube Qamar" , "d) iCube Noor"]
    },
    {
        name: "questionNo2",
        type: "list",
        message: "Q2: Who is the current president of Russia?",
        choices: ["a) Alexender Muller" , "b) Viladimir Putin" , "c) John Stephen" , "d) James Mickron"]
    },
    {
        name: "questionNo3",
        type: "list",
        message: "Q3: Which country holds the Chairmanship of G-20 Countries for the year 2024?",
        choices: ["a) France" , "b) Germany" , "c) Brazil" , "d) Italy"]
    },
    {
        name: "questionNo4",
        type: "list",
        message: "Q4: Who is the Current Deputy Prime Minister of Pakistan?",
        choices: ["a) Bilawal Bhutto" , "b) Ishaq Dar" , "c) Raja Riaz Ahmed" , "d) Omer Ayoub"]
    },
    {
        name: "questionNo5",
        type: "list",
        message: "Q5: Which is the second most spoken language in the world? ",
        choices: ["a) English" , "b) Chinese" , "c) Spanish" , "d) French"]
    }
]);
let score: number = 0;

switch(quiz.questionNo1) {
    case "c) iCube Qamar":
    console.log("1. Your answer is right");
    ++score;
    break;
    default:
        console.log("1. Sorry your answer is wrong");
}

switch(quiz.questionNo2) {
    case "b) Viladimir Putin" :
        console.log("2. Your answer is right");
        ++score;
        break;
        default:
            console.log("2. Sorry your answer is wrong");
}

switch(quiz.questionNo3) {
    case "c) Brazil" :
        console.log("3. Your answer is right");
        ++score;
        break;
        default:
            console.log("3. Sorry your answer is wrong");
}

switch(quiz.questionNo4) {
    case "b) Ishaq Dar" :
        console.log("4. Your answer is right");
        ++score;
        break;
        default:
            console.log("4. Sorry your answer is wrong");
}

switch(quiz.questionNo5) {
    case "c) Spanish" :
        console.log("5. Your answer is right");
        ++score;
        break;
        default:
            console.log("5. Sorry your answer is wrong");
}

console.log(`\n your score out of 5 is: ${score} \n`);

