document.addEventListener("DOMContentLoaded", function(event){

    let todos = [];
    let input = prompt("type something")


    while (input !== "exit"){
        // List out todos
        if (input === "list"){
            // format todos for easy reading
            console.log("********************");
            console.log("Here are your todos");
            todos.forEach(function(list, i){
                console.log(i, list);
            });
            console.log("********************");
        }
        // Add to todos
        else if (input === "new"){
            console.log("Ok enter a new todo entry")
            let newtodo = prompt("enter new todo")
            todos.push(newtodo)
            console.log(newtodo + " added to todo list")
        }
        // Loop Question
        input = prompt("type something")
    }
    // Exit the application
    console.log("Okay you quit the application")

});


