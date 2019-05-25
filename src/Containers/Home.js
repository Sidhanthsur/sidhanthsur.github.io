import React from 'react'
import './Style/HomeStyle.css'
import { Container, Row, Col } from 'reactstrap'
import CircleImage from '../Components/CircleImage'
import PortfolioCard from '../Components/PortfolioCard'

export default function Home() {
    return (
        <Container fluid>

            <Row className='main-row'>
                <Col md='4' className=' d-flex justify-content-center align-items-center'>
                    <img
                        className='profile-pic'
                        src={require('../Images/profile.jpg')} />
                </Col>

                <Col md='8'>

                    <h1 className='font-effect-anaglyph title'>Sidhanth Surana</h1>
                    <p>A Full stack Javascript web and mobile developer fueled purely by pizzas. A polyglot developer
                         who loves tinkering and exploring new libraries , frameworks and languages. Core believer
                         of hardwork beating talent. Currently enjoying the MERN stack and GraphQL schematic for APIs.
                    </p>

                    <div >
                        <h1 className='title mt-4 mb-3'>Connect </h1>
                        <div className='d-flex flex-row justify-content-between second-div'>
                            <a href='https://github.com/Sidhanthsur'>
                                <i class="fab fa-github fa-3x"></i>
                            </a>

                            <a href='https://www.linkedin.com/in/sidhanthsur/'>
                                <i class="fab fa-linkedin fa-3x"></i>
                            </a>
                            <a href='https://medium.com/@sidhanth'>
                                <i class="fab fa-medium fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </Col>

            </Row>

        </Container>
    )
}