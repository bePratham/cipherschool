import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
function navbar() {
  return (
    <Navbar style={{margin:0}} className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src='logo.png' alt="" style={{ width: '50px', height: '50px' }}/>
        </Navbar.Brand>
          <h2 class="header">Plutonn</h2>
        <Navbar.Toggle />
        <div className="middle" >
            Post
        </div>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;