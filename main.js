#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.underline(`
-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
\t\t || Welcome To Wardah TodoList App ||`));
let todos = [];
let condition = true;
while (condition) {
    let operations = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: chalk.redBright("Select an operation:  "),
            choices: ["Add Task", "Show Task", "Delete Task", "Exit"]
        }
    ]);
    if (operations.operator === "Add Task") {
        let add = await inquirer.prompt([
            {
                name: "addTodo",
                type: "input",
                message: chalk.redBright("What do you want to add in your ToDo? ")
            }
        ]);
        todos.push(add.addTodo);
        condition = add.addTodo;
        console.log(chalk.yellowBright('Your ToDo list is: ', '\n', todos));
    }
    else if (operations.operator === "Show Task") {
        console.log(chalk.redBright(todos));
    }
    else if (operations.operator === "Delete Task") {
        let deleteTask = await inquirer.prompt([
            {
                name: "deleteTodo",
                type: "list",
                message: chalk.redBright("Select the task to delete: "),
                choices: todos.map(item => item)
            }
        ]);
        let newTodos = todos.filter(val => val !== deleteTask.deleteTodo);
        todos = [...newTodos];
        console.log(chalk.blueBright(todos));
    }
    else if (operations.operator === "Exit") {
        console.log(chalk.green("\t\t Thank You For Using To Do List App"));
        break;
    }
    else {
        console.log(chalk.cyanBright("Please Select A Valid Option"));
    }
    ;
}
