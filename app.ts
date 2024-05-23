import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright("-".repeat(100)));
console.log(chalk.bgMagentaBright.bold("\t\t\t <<<<<<<<<< Welcome to Self-Check Quiz >>>>>>>>>>"));
console.log(chalk.blueBright("-".repeat(100)));

// Define the question type
type Question = {
    type: string;
    name: string;
    message: string;
    choices: string[];
};

// Define the questions
const questions: Question[] = [
    {
        type: "list",
        name: "Q1",
        message: "What is the result of 5 + 3?",
        choices: ["a) 7", "b) 8", "c) 9", "d) 10"],
    },
    {
        type: "list",
        name: "Q2",
        message: "What is the output of 'Hello' + 'World'?",
        choices: [
            "a) HelloWorld",
            "b) Hello World",
            "c) Hello+World",
            "d) HelloWorld!",
        ],
    },
    {
        type: "list",
        name: "Q3",
        message: "What is TypeScript?",
        choices: [
            "a) A programming language",
            "b) A JavaScript library",
            "c) A superset of JavaScript",
            "d) A database management system",
        ],
    },
    {
        type: "list",
        name: "Q4",
        message: "What extension do TypeScript files typically have?",
        choices: ["a) .ts", "b) .js", "c) .txt", "d) .html"],
    },
    {
        type: "list",
        name: "Q5",
        message: "Which keyword is used to declare a variable in TypeScript?",
        choices: ["a) var", "b) let", "c) const", "d) declare"],
    },
];

// Correct answers
const correctAnswers: { [key: string]: string } = {
    Q1: "b) 8",
    Q2: "a) HelloWorld",
    Q3: "c) A superset of JavaScript",
    Q4: "a) .ts",
    Q5: "b) let",
};

async function main() {
    let score = 0;

    // Function to check the answer
    function checkAnswer(questionName: string, userAnswer: string) {
        if (userAnswer === correctAnswers[questionName]) {
            console.log(chalk.green("You got it right!"));
            score += 10;
        } else {
            console.log(chalk.red("Sorry, that's not correct."));
        }
    }

    for (const question of questions) {
        const answer = await inquirer.prompt([question]);
        checkAnswer(question.name, answer[question.name]);
        console.log(chalk.blueBright("-".repeat(100)));
    }

    // Display the total score
    console.log(chalk.bgBlue(`Your total score is: ${score}`));
}

main();

