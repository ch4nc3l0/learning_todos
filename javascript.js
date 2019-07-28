document.addEventListener("DOMContentLoaded", function(event){

    let todos = ["Example Todo"];
    let input = prompt("type something")


    while (input !== "exit"){
        // List out todos
        if (input === "list"){
            console.log(todos);
        }
        // Add to todos
        else if (input === "new"){
            let newtodo = prompt("enter new todo")
            todos.push(newtodo)
        }
        // Loop Question
        input = prompt("type something")
    }

});


