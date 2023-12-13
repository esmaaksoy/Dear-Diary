import { FiEdit2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
const Task = ({task,day}) => {
  return (
    <div className="d-flex justify-content-between">
    <p>{task}</p>
    <p>{day}</p>
    <div className="d-flex justify-content-center align-items-center">
    <FiEdit2 />
    <FaTrash />
    </div>
  </div>
  )
}

export default Task
