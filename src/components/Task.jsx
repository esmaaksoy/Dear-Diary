import { FiEdit2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
const Task = ({ task, day, value,date }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
  
        <p>{new Date(date).getDate()}/{task}</p>
  
        <div >
        <FiEdit2 className="text-white me-2"/>
        <FaTrash className="text-white"/>
        </div>
      
    </div>
  );
};

export default Task;
