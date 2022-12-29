import "./minpro.css";
import NavbarList from "../../componen/navbar/Navbar";
import Card from "react-bootstrap/Card";
import MoveDB from "../../componen/foto/the_movie.jpeg";
import Nakama from "../../componen/foto/nakama.jpeg";
import { Col, Row } from "react-bootstrap";

const MinPro = () => {


  return (
    <>
      <header>
        <div>
          <NavbarList />
          <Row>
            <Col sm="6" style={{width: "auto", paddingTop: "10px"}}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={MoveDB} />
                <Card.Body>
                  <Card.Title>the movie DB</Card.Title>
                  <p>this is a project i created using api from the movei db</p>
                  <a href="https://github.com/Gilarsetiawanramadhan/mini_projek_2_vilm">
                    open link
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" style={{width: "auto", paddingTop: "10px"}}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Nakama} />
                <Card.Body>
                  <Card.Title>NAKAMA</Card.Title>
                  <p>in this project I use bootstrap, html, and css.</p>
                  <a href="https://github.com/Gilarsetiawanramadhan/NAKAMA.WE.git">
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
