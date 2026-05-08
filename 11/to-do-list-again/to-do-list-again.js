const toDoList = [
  {
    name: 'wash clothes',
    dueDate: '2026-05-09'
  },
  {
    name: 'dry clothes',
    dueDate: '2026-05-09'
  }
];

fetchDisplay();

function fetchDisplay(){
  let todoListHTML = '';
  for(let i = 0;i<toDoList.length;i++){
    const inputObj = toDoList[i];
    const {name , dueDate } = inputObj;

    const html = 
    `<p>
      ${name} ${dueDate}
      <button onclick="toDoList.splice(${i},1)
      fetchDisplay();
      console.log(todoList);
      "> 
        Delete
      </button>
    </p>`

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
function addToDo() {

  const inputeName = document.querySelector('.js-name-input');
  let name = inputeName.value;

  const inputeDate = document.querySelector('.js-date-input');
  let dueDate = inputeDate.value;
  
  if(inputeName.value === ''){
    return;
  }
  toDoList.push({
    name,
    dueDate
  });

 
   inputeName.value = '';
   inputeDate.value = '';

   fetchDisplay();
}