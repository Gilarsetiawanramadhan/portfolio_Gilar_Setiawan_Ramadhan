import "./about.css"
import React from "react";
import NavbarList from "../../componen/navbar/Navbar";
import foto from "../../componen/foto/planet jupiter.png"
import { Container, Image } from "react-bootstrap";
const About = ()=>{
    return(
        <>
        <NavbarList/>
        <Container>
            <div className="wraper">
                <Image className="jupiter" src={foto} alt="planet jupiter"/>
                <dl className="me">
                    <dt className="my">MY SELF</dt>
                    <dd>I am a front end web developer located in Semarang, Central Java, Indonesia. 
                        I really like design activities such as logos and images.
                        I am a person who is disciplined and responsible for tasks, 
                        can work in teams, and is thorough in looking at problems from various angles, 
                        and I am interested in the entire frontend spectrum and work on ambitious projects with positive people.
                    </dd>
                </dl>
            </div>
        </Container>
        </>
    )
}

export default About;