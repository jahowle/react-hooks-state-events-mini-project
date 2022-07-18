//Map an array of tasks to this list


import React from "react";
import Task from "./Task"

function TaskList({tasks, handleRemove}) {  
  

  const taskElements = tasks.map((task) => {
    return <Task key={task.text} category={task.category} text={task.text} handleRemove={handleRemove} />
  })

  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
