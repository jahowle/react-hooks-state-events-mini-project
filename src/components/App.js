import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  
  const [taskList, setTaskList] = useState(TASKS);
  const [category, setCategory] = useState("All")

  function handleAddTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  function removeTask(e) {
    const updatedTasks = taskList.filter(task => task.text !== e)
    setTaskList(updatedTasks)
  }

  function onSelectCategory(e) {
    setCategory(e)
  }

  const visibleTasks = taskList.filter((task) =>
  {
    if(category === "All"){
      return true
    } else if (task.category === category) {
      return true
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={onSelectCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={visibleTasks} handleRemove={removeTask}/>
    </div>
  );
}

export default App;
