import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function getNextId(data){
    const maxId = data.reduce((prev, current) => prev && prev.id > current.id ? prev : current, 0);
    return maxId + 1;
  }

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks)
    })
  }

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task
    })
  }

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId
    })
    
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}


