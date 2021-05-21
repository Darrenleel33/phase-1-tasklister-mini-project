document.addEventListener("DOMContentLoaded", () => {
  let newTaskForm = document.getElementById('create-task-form')

  let newTaskDescription = document.getElementById('new-task-description')
});


function renderAddTask(){
  document.querySelector('#new-task-description').textContent=console.log(document.querySelector('.task'))

  let taskLi = document.createElement('li')

  

}



document.querySelector("#Create New Task").addEventListener('submit', (e) => {
  e.preventDefault()
  let taskForm = {
      task: e.target.newTaskDescription.value
  }
  console.log(taskForm)
})

//taskList.createNewTask(newTaskDescription.value);