import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const CardModal = ({
  show,
  setShow,
  months,
  addTask,
  value,
  setValue,
  setData,
  setDate,
  data,
  bg,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    setData([
      ...data,
      {
        id: new Date().getTime(),
        months: months,
        day: new Date().toLocaleString(),
        task: value,
      },
    ]);
    setValue("");
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton style={{ backgroundColor: bg }}>
          <Modal.Title>{months}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Enter a task</Form.Label>
              <Form.Control
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Select date</Form.Label>
              <Form.Control
                onChange={(e) => setDate(e.target.value)}
                type="date"
                required
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: bg, border: bg }}
              type="submit"
              className="mb-3 w-100"
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardModal;
