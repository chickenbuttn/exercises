let input = prompt('what would you like to do?');
const todos = [];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`)
        }
        console.log('***********')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to list`)
    } else if (input === 'delete') {
        const deleteTodo = prompt('What todo would you like to delete?')
        const indexTodos = todos.indexOf(deleteTodo)
        if (todos.length === 0) {
            console.log(`You're todo list is currently empty.`)
        } else {
            for (to of todos) {
                if (deleteTodo !== to) {
                    console.log(`Couldn't find todo.`)
                } else {
                    todos.splice(indexTodos, 1)
                    console.log(`Ok, deleted, "${deleteTodo}", from the list.`)
                }
            } 
        }
    }
    input = prompt('what would you like to do?')
}

console.log('OK QUIT THE APP!');