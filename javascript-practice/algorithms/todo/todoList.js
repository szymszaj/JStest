let tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log(`Dodano zadanie: "${task}"`);
}

function removeTask(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    const removedTask = tasks.splice(taskIndex, 1);
    console.log(`Usunięto zadanie: "${removedTask}"`);
  } else {
    console.log("Niepoprawny indeks zadania.");
  }
}

function showTasks() {
  if (tasks.length === 0) {
    console.log("Brak zadań do wyświetlenia.");
  } else {
    console.log("Lista zadań:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

addTask("Napisać aplikację");
addTask("Przetestować kod");

showTasks();

removeTask(1);

showTasks();
