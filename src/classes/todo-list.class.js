// 202106051400
export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {}

    marcarCompletado(id) {}

    eliminarCompletados() {}
}
