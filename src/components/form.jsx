import react, {useState} from "react";
import '../CSS/form.css'
import { v4 as uuidv4} from 'uuid'

function TaskForm(props) {

    const [input, setinput] = useState('');

    const handleChange = (e) => {
        //Va permitir tomar el valor de lo que el usuario ingrese al generar un cambio en el input
        setinput(e.target.value);
    }

    const handleShipping = (e) =>{
        //función que permitira que no se reenderice toda la App al enviar formulario
        e.preventDefault();
        const newTask = {
            //uuidv4 es un paquete que nos va permitir generar un identificador nuevo y totalmente distinto para cada tarea
            id: uuidv4(),
            text: input,
            complete : false
        }
        //nos permitira añadir como prop la tarea nueva, prop que pasaremos a la lista de tareas (tasklist) para agregar una tarea nueva
        props.onSubmit(newTask);
    }

    return(
        <form 
        className="task-form"
        //cuando se envie el formulario se llamara la función que manejara el envio
        onSubmit={handleShipping}
        >
            <input 
            type="text"
            className="task-input"
            placeholder="Write your task"
            name="text"
            //cada que haya un cambio se llamara la función 
            onChange={handleChange}
            />
            <button className="task-button">
                Add task
            </button>
        </form>
    )
}

export default TaskForm;