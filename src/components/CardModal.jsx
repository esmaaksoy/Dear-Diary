import Modal from "react-bootstrap/Modal";

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
        <Modal.Header closeButton className="bg-danger">
          <Modal.Title>{months}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
          <label>Enter a task</label>
          <input
            type="text"
            className="mb-3 w-100"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <label>Select date</label>
          <input
            type="date"
            className="mb-3 w-100"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button onClick={handleSubmit} className="mb-3 w-100 bg-danger">
            Add
          </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardModal;
