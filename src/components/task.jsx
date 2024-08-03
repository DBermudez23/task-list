import react from "react";
import '../CSS/task.css';
import { AiFillCloseCircle } from "react-icons/ai";


function Task  ({text, complete, id, completeTask, delTask}) {
    return(
        <div className={complete ? 'task-container complete' : 'task-container'}>
            <div className="task-text"
            //evento onclick con una función anonima que llamara a otra función que va ser la de completar tarea la cual va recibir el id de la tarea para saber que tarea fue completada
            onClick={() => completeTask(id)}
            >
                {text}
            </div>
            <div 
            className="task-icon-container"
            //Para eliminar tarea hacemos lo mismo que en el completeTask
            onClick={() => delTask(id)}
            > 
                <AiFillCloseCircle className="task-icon" />
            </div>
        </div>
    )
}

export default Task;