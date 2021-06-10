// 202106021755

import './styles.css';

//Por default busca index.js
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach((todo) => crearTodoHtml(todo));

//Esto es lo mismo que la línea anterior
//Esto aplica solo cuando se tiene un argumento
todoList.todos.forEach(crearTodoHtml);
