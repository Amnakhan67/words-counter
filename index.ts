#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(40));
console.log(chalk.blueBright.bold(`\n\tWelcome to Amna's word counter program\n\t`));
console.log("=".repeat(40));

//writing a question
let answer=await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"write a sentence"
}]);
let words=answer.sentence.trim().split(" ");
console.log(`\nSentence words:\n`)
console.log(words);
console.log(`\nWords count: ${words.length}`)