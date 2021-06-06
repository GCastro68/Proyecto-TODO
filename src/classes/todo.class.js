// 202106051346

export class Todo {
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime(); //4598543723
        this.completado = false;
        this.creado = new Date();
    }
}
