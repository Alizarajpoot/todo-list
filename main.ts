import inquirer from "inquirer";
let todos=[]    // shooper []
let condition = true;

while(condition){

let todoQuestion = await inquirer.prompt(
 [
    {
       name:"firstquestion",
       message:"what would you like to add in your todos?",
       type: "input"


      },
    {
        name:"sencodquestion",
        message:"what would you like to add more in your todos?",
        type: "confirm",  //when type is confirm ans is yes or no
        default:"true"
 
      },
  ]  
);
// the loop is running on the based of this variable condition.
todos.push(todoQuestion.firstquestion);
condition= todoQuestion.sencodquestion
console.log(todos)
}

// read , create , update , delete , add