import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <Navbar className="bg-dark">
        <Container >
          <Navbar.Brand href="#home" className='d-flex align-items-center'>
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2018/01/03/09/09/reserve-3057904_1280.png"
              width="80"
              height="80"
              className="d-inline-block align-top me-3"
            />
            <p className='text-white display-6' > Dear Diary</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Nav