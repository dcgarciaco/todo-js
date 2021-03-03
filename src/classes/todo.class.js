export class Todo {         //como la clase la voy a usar fuera del archivo va con export

//    static fromJason( obj ){ // si se recibiera el objeto completo
    static fromJason( {id, tarea, completado, creado} ){   //Con desestructuración de argumentos

        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor( tarea ){

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}