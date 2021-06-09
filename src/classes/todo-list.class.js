// 202106051400
export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        //en this.todos se recibe un arreglo con todos los elementos excepto con el id que se borra
        this.todos = this.todos.filter((todo) => todo.id != id);
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter((todo) => !todo.completado);
    }
}
