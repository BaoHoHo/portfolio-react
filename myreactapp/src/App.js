import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img src="./IMG_5699.jpg" alt="Profile Photo" width="1008" height="756"></img>

      <h1 className='NameTitle'>Bao Gia Ho</h1>
      <h4>Blacksburg, VA 24061
        <br /> 757 325-0401
        <br />bgho21@vt.edu
        <br />LinkedIn: https://www.linkedin.com/in/baogho/
        <br />GitHub: BaoHoHo</h4>
      <h2>Objective</h2>
      <h4>Seeking an internship or co-op Summer 2022 in the field of C S</h4>

      <h2>Skills</h2>
      <h4>
        <li>Java</li>
      </h4>

      <h2>Education</h2>
      <h4>Virginia Tech, Blacksburg, VA | Expected graduation in 2025</h4>
      <h5><li>Major: Computer Science</li></h5>
      <h4>Peninsula Catholic High School, Newport News, VA | June 2021</h4>
      <h5><li>High School Diploma Degree | Graduated with a GPA of 4.29</li></h5>
    </div>
  );
}

export default App;
