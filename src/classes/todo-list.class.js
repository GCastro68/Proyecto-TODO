import { Todo } from './todo.class';

// 202106051400
export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        //en this.todos se recibe un arreglo con todos los elementos excepto con el id que se borra
        this.todos = this.todos.filter((todo) => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter((todo) => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

        //Se hace este llamado para convertir a objetos los Todos llamados
        //Del local storage ya que se toman como string y se tienen que convertir a objeto Todo
        //la conversión se hace en todo.class.js
        // this.todos = this.todos.map((obj) => Todo.fromJson(obj));

        //Esta línea es igual a la anterior pero simplificada
        this.todos = this.todos.map(Todo.fromJson);
    }
}
