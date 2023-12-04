export function getTodos() {
  const todos = localStorage.getItem('todos');
  if (todos) {
    const myTodos = JSON.parse(todos);
    return myTodos;
  }
  return [];
}

export function setTodo(todo) {
  const otherTodos = getTodos();

  localStorage.setItem('todos', JSON.stringify([todo, ...otherTodos]));
  window.dispatchEvent(new Event('todos'));
}

export function updateTodoStatus(id) {
  const otherTodos = getTodos();

  const updatedTodos = otherTodos.map((e) => {
    if (e.id == id) {
      return { ...e, isCompleted: !e.isCompleted, dateOfFinish: Date.now() };
    }
    return e;
  });

  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  window.dispatchEvent(new Event('todos'));
}
