import { useState } from 'react'
import taskLogo from '../public/taskLogo.png'
import TaskList from './components/taskList';


function App() {


  return(
    <div className='app-tareas'>
      <div className='logo-task'>
        <img src={taskLogo} alt="" />
        <h1>My task-list</h1>
      </div>
      <div className='task-list-main'>
        <TaskList/>
      </div>
    </div>
  )
}

export default App
