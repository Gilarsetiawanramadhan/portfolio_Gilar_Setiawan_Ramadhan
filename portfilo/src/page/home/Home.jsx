import './home.css';
import NavbarList from '../../componen/navbar/Navbar';
import { Col, Row } from 'react-bootstrap';



const Home = () => {

    return (
        <>
            <header>
                <NavbarList/>
                <div className='home'>
                    <div className='name' style={{color:"white"}}>
                        halo semua, saya Gilar
                    </div>
                    <Row>
                        <Col xs ms="6">
                            <h1 className='des'> saya merupakan forntend
                                    <br/>
                                web developer junior.
                            </h1>
                            <a href='./About'>
                                <div className='right'>
                                <div className='planet'>
                                        </div>
                                    <span className='about'>
                                        <h3 style={{color:"tomato", opacity:"none"}}>About</h3>
                                    </span>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </div>
            </header>
        </>
    );
}

export default Home