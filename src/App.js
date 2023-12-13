import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "./helper/data";
import Cards from "./components/Cards";
import "./app.css"
function App() {
  return (
    <Container fluid="md">
      <h1 className="text-center">Future Plans</h1>
      <Row className="bg-dark p-3">
        {data.map((item) => (
          <Col className="g-3">
            <Cards {...item}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
