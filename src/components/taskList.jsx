import React, {useState} from "react";
import TaskForm from "./form";
import '../CSS/tasklist.css'
import Task from "./task";


function TaskList () {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {


        //Primero probamos que la cadena no este vacía
        //trim() metodo que nos permite eliminar los espacios del principio y del final de una cadena de texto
        if (task.text.trim()) {
            task.text = task.text.trim();
            //Para agregar la tarea nueva al principio del arreglo, y dejar el resto en orden secuencial
            const updatedTask = [task, ...tasks];
            //Para tomar las tareas nuevas y añadirlas al array
            setTasks(updatedTask);
        }
    }

    const delTask = (id) => {
        const updatedTask = tasks.filter(task => task.id !==id);
        setTasks(updatedTask);
    }

    const completeTask = (id) => {
        const updatedTask = tasks.map(task => {
            if (task.id === id) {
                task.complete = !task.complete;
            }
            return task;
        });
        setTasks(updatedTask); 
    }


    return(
        <>
            <TaskForm onSubmit= {addTask}/>
            <div className="TaskList-container">
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            complete={task.complete}
                            delTask={delTask}
                            completeTask={completeTask}
                        />

                    )
                }
            </div>
        </>
    )
}

export default TaskList;