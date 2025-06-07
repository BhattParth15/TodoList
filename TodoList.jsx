import { useState } from "react";
import { v4 as uuidv4} from 'uuid';

export default function TodoList(){
    let [todos, setTodos]=useState([{task:"sample Task" ,id:uuidv4(), isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=() => {
        setTodos([...todos,{task:newTodo,id:uuidv4(), isDone:false}]);
        setNewTodo("");

    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=> todos.filter((prevTodos)=>prevTodos.id !=id));

    };

    let upperCaseAll=()=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            })
        );
    };

    let upperCaseOne=(id)=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        task:todo.task.toUpperCase(),
                    };   
                }else{
                    return todo;
                }
            })
        );
    }

    let markAllDone=()=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            };
        })
      );
    };
    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone:true,
                    };   
                }else{
                    return todo;
                }
            })
        )
    }
    return (
        <div>
            <input 
            placeholder="Add a Task"
            value={newTodo}
            onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                     <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                     &nbsp;
                     &nbsp;
                     <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                     <button onClick={()=>upperCaseOne(todo.id)}>UpperCaseOne</button>
                     <button onClick={()=>markAsDone(todo.id)}>CompleteTodo</button>
                     </li>
                ))}
            </ul>
            <br></br>
            <br></br>
            <button onClick={upperCaseAll}>ApperCaseAll</button>
            <br></br>
            <br></br>
            <button onClick={markAllDone}>All Task Completed</button>
        </div>
    );
}
