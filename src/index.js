import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHTML } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

/*
//Primera parte para añadir un Todo
const tarea = new Todo('Aprender JavaScript');
//console.log(tarea);
todoList.nuevoTodo( tarea );
console.log(todoList);
crearTodoHTML( tarea );
*/

//Trabajo con LocalStorage
// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');
/*
setTimeout( () => {
    localStorage.removeItem('mi-key');
}, 1500); */

//console.log(todoList.todos); //Comprobar que hayan sido creados los todos al recargar navegador

// todoList.todos.forEach( todo => crearTodoHTML(todo) );
todoList.todos.forEach( crearTodoHTML );  //Si es un solo argumento se puede llamar así 

/*Reconstruyendo instancias de Todo
const newTodo = new Todo('Aprender JavaScript');
todoList.nuevoTodo(newTodo);
todoList.todos[0].imprimirClase();  //no funcionaría porque al reconstruir del local storage se pierden los métodos sin hacer el map al objeto
*/
console.log('todos', todoList.todos);