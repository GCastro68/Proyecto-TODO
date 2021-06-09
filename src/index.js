// 202106021755

import './styles.css';

//Por default busca index.js
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);

tarea.completado = false;
crearTodoHtml(tarea);
