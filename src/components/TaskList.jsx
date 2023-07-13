import Task from './Task'
var AllTasks =['Desayunar','Hacer Ejercicio','Hacer Tareas','Regar Plantas']

export default function TaskList () {
    return (
        <ul>
            {AllTasks.map((task) => {
            return <Task task={task}> </Task>
            })}
        </ul>
    );
}
