import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {

        for( const todo of this.todos ){
            
            // console.log(id, todo.id);
            if( todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }
    }

    eliminarCompletados(){
        //Eliminar todos los Todo 
        this.todos = this.todos.filter( todo => !todo.completado ); //Dejar solo los completados
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ));
    
    }

    cargarLocalStorage(){
        /*
        if( localStorage.getItem('todo') ){
            
            this.todos = JSON.parse(localStorage.getItem('todo'));
            console.log('cargar local', this.todos);
            console.log(typeof this.todos);

        }else{
            this.todos = [];
        }*/
        this.todos = ( localStorage.getItem('todo') ) 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [];

        /*this.todos = this.todos.map( obj => Todo.fromJason( obj ) ); /*Map permite barrer todos los elementos de un 
                                    arreglo y retornar un nuevo arreglo */
        this.todos = this.todos.map( Todo.fromJason );  //Utilizando directamente como CallBack

    }
}