import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setDetailsState] = useState("")
  const [category, setCatState] = useState("Code")


  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setDetailsState("")
    setCatState("Code")
  }


  const optionList = categories.map((category) => {
    return (
      <option value={category} key={category}>{category}</option>
    )
  })

  const optionsToDisplay = optionList.filter((option) => option.key !== "All")



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={text} 
        onChange={e => setDetailsState(e.target.value)}/>
      </label>
      <label>
        Category
        <select 
        onChange={e => setCatState(e.target.value)} 
        value={category} 
        name="category">
          {optionsToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
