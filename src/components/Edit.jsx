import { useState } from "react";

const Edit = ({editTask, item}) => {
    const [value, setValue] = useState(item.task); 
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, item.id);
      };
  return (
    <form onSubmit={handleSubmit} className="d-flex">
     <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input" placeholder='Update task' />
     <button type="submit" className="bg-dark text-white w-100 border-0">Edit Task</button>
    </form>
  )
}

export default Edit
