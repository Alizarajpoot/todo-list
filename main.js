import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstquestion",
            message: "what would you like to add in your todos?",
            type: "input"
        },
        {
            name: "sencodquestion",
            message: "what would you like to add more in your todos?",
            type: "confirm",
            default: "true"
        },
    ]);
    todos.push(todoQuestion.firstquestion);
    condition = todoQuestion.sencodquestion;
    console.log(todos);
}
