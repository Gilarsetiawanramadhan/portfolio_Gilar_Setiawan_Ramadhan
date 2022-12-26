import NavbarList from "../../componen/navbar/Navbar";
import Card from "react-bootstrap/Card";
import foto from "../../componen/foto/the_movie.jpeg";
// import foto from "../../componen/foto/nakama.jpeg";
import { Col, Row } from "react-bootstrap";

const MinPro = () => {

  return (
    <>
      <header>
        <div>
          <NavbarList />
          <Row>
            <Col sm="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={foto} />
                <Card.Body>
                  <Card.Title>the movie DB</Card.Title>
                  <a href="https://github.com/Gilarsetiawanramadhan/mini_projek_2_vilm">
                    open link
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`${foto}/nakama.jpeg`} />
                <Card.Body>
                  <Card.Title>the movie DB</Card.Title>
                  <a href="https://github.com/Gilarsetiawanramadhan/mini_projek_2_vilm">
                    open link
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
};

export default MinPro;
