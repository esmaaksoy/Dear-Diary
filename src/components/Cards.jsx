import Card from "react-bootstrap/Card";
import Task from "./Task";
import { TbDeviceIpadPlus } from "react-icons/tb";
import { taskData } from "../helper/data";
import CardModal from "./CardModal";
import { useState } from "react";
const Cards = ({ months, bg }) => {
  const [show, setShow] = useState(false);
  const [value,setValue]=useState();
  const [date, setDate] = useState("");
  const [data,setData]=useState([])
  return (
    <Card style={{ width: "18rem", backgroundColor: bg }} >
      <Card.Body >
        <Card.Title className="text-white">{months}<TbDeviceIpadPlus className="text-white ms-2" onClick={() => setShow(true)}/></Card.Title>
        <Card.Text>
           { data.map((item)=>(
                <Task {...item} value={value} date={date}/>
            ))}
        </Card.Text>
      </Card.Body>
      <CardModal show={show} setShow={setShow} months={months} setData={setData} data={data} value={value} setValue={setValue} setDate={setDate} />
    </Card>
  );
};

export default Cards;
