import React from 'react';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">React Bootstrap Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Title */}
        <h1>Welcome to My React App</h1>

        {/* Cards */}
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is the content of card 1.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          {/* Add more cards here */}
        </Container>
      </div>
    </>
  );
}

export default App;
