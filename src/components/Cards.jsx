import Card from "react-bootstrap/Card";
import Task from "./Task";
import { taskData } from "../helper/data";
import CardModal from "./CardModal";
import { useState } from "react";
const Cards = ({ months, bg }) => {
  const [show, setShow] = useState(false);

  return (
    <Card style={{ width: "18rem", backgroundColor: bg }} >
      <Card.Body onClick={() => setShow(true)}>
        <Card.Title>{months}</Card.Title>
        <Card.Text>
           { taskData.map((item)=>(
                <Task {...item}/>
            ))}
        </Card.Text>
      </Card.Body>
      <CardModal show={show} setShow={setShow}/>
    </Card>
  );
};

export default Cards;
