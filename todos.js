let input = prompt("what would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean House'];
const history = [];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('*****************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}:${todos[i]}`);
    }
    console.log('*****************');
  } else if (input === 'new') {
    const newTodo = prompt('Add Item To List');
    todos.push(newTodo);
    console.log(`${newTodo} has been added to the list!`);
  } else if (input === 'delete'){
    const deletedItem = parseInt(prompt('Delete an item **enter item number**'));
    if (!Number.isNaN(deletedItem)){
      const trashedItem = todos.splice(deletedItem, 1);
      history.push(trashedItem);
      console.log(`Deleted item: ${deletedItem}`);
    } else {
      console.log('Not A Valid List Item Number');
    }



  }else if (input === 'history'){
    console.log('*****************');
    for (let i = 0; i < history.length; i++) {
      console.log(`${history[i]}`);
    }
    console.log('*****************');
  }

  input = prompt("what would you like to do?");
}
console.log('OK, You Quit The App!');
