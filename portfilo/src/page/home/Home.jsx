import "./home.css";
import NavbarList from "../../componen/navbar/Navbar";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <header>
        <NavbarList />
        <div className="home">
          <div className="name" style={{ color: "white" }}>
            hi i'm Gilar
          </div>
          <Row style={{ padding: "0" }}>
            <Col xs ms="6">
              <h1 className="des">
                {" "}
                and I am junior Forntend
                <br />
                Web Developers..
              </h1>
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
};

export default Home;
