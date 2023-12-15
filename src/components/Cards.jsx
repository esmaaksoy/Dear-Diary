import Card from "react-bootstrap/Card";
import Task from "./Task";
import { TbDeviceIpadPlus } from "react-icons/tb";

import CardModal from "./CardModal";
import { useState } from "react";
const Cards = ({ months, bg }) => {
  const [show, setShow] = useState(false);
  const [value,setValue]=useState();
  const [date, setDate] = useState("");
  const [data,setData]=useState([])
  console.log(data)
  const deleteTodo = (id) => setData(data.filter((item) => item.id !== id));
  return (
    <Card style={{ width: "18rem", backgroundColor: bg }} >
      <Card.Body >
        <div className="d-flex justify-content-between align-items-center">
        <Card.Title className="text-white">{months}</Card.Title>
        <TbDeviceIpadPlus className="text-white display-6" onClick={() => setShow(true)}/>
        </div>
       
        <Card.Text>
           { data.map((item)=>(
                <Task {...item} value={value} date={date} deleteTodo={deleteTodo}/>
            ))}
        </Card.Text>
      </Card.Body>
      <CardModal show={show} setShow={setShow} months={months} setData={setData} data={data} value={value} setValue={setValue} setDate={setDate} bg={bg}/>
    </Card>
  );
};

export default Cards;
