import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {data} from "./helper/data"
import { Button } from 'bootstrap';
function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
        {data.map((item)=>)}
        </Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default App;
