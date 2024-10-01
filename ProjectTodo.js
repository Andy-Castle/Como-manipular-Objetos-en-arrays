let ProjecstTodos = [
  {
    id: 1,
    title: "Default",
    todoList: [
      {
        id: 1,
        title: "Demo",
        dueDate: "30/09/2024",
        priority: "Low",
        status: "Doing",
      },
      {
        id: 2,
        title: "Tutorial",
        dueDate: "2/10/2024",
        priority: "Medium",
        status: "Doing",
      },
    ],
  },
  {
    id: 2,
    title: "Desarrollo Movil",
    todoList: [
      {
        id: 1,
        title: "Mockups",
        dueDate: "2/10/2024",
        priority: "Medium",
        status: "Doing",
      },
      {
        id: 2,
        title: "Data Base",
        dueDate: "3/10/2024",
        priority: "Medium",
        status: "Doing",
      },
    ],
  },
  {
    id: 3,
    title: "PWA",
    todoList: [
      {
        id: 1,
        title: "Programming",
        dueDate: "5/10/2024",
        priority: "Low",
        status: "Doing",
      },
      {
        id: 2,
        title: "Testing",
        dueDate: "7/10/2024",
        priority: "Medium",
        status: "Doing",
      },
    ],
  },
];

//Buscar un proyecto individual
function findAProyect(nameProject) {
  return ProjecstTodos.filter((p) => p.title === nameProject);
}
// console.log(findAProyect("Default"));

//Crear un nuevo proyecto individual
function createAProject(name) {
  let lastIndex = ProjecstTodos.length - 1;
  let lastProjectId = ProjecstTodos[lastIndex].id;
  ProjecstTodos.push({ id: lastProjectId + 1, name: name, todoList: [] });
  return ProjecstTodos;
}
// console.log(createAProject("Friday"));
// console.log(createAProject("Frida"));

//Eliminar un proyecto
function deleteOneProject(id) {
  let result = ProjecstTodos.filter((p) => p.id !== id);
  ProjecstTodos = result;
  return ProjecstTodos;
}
// console.log(deleteOneProject(4));

//Modificar el nombre del proyecto
function channgeProjectName(id, title = null) {
  let result = ProjecstTodos.filter((p) => p.id === id);
  for (const elements of result) {
    if (title !== null) {
      elements.title = title;
    }
  }
  result = ProjecstTodos;
  return result;
}
// console.log(channgeProjectName(2, "Andy"));

//Crear un nuevo to do a un proyecto especifico
//Eliminar un to do de un proyecto especifico
//Modificar un to do de un proyecto especifico
