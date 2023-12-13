
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
const CardModal = ({show,setShow}) => {
  const [value,setValue]=useState();
 console.log(value)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setShow(false)

  }
  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton >
          <Modal.Title>Month</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size="sm" className="mb-3" value={value} onChange={(e)=>setValue(e.target.value)}>
            <Form.Control />
            <Button variant="primary" onClick={handleSubmit}>
              Add
            </Button>
          </InputGroup>
          <Form.Control type="datetime-local" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardModal;
