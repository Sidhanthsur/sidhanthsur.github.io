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

                    <h1 className='font-effect-anaglyph'>Sidhanth Surana</h1>
                    <p>A Full stack Javascript developer fueled purely by pizzas. A polyglot developer
                         who loves tinkering and exploring new libraries , frameworks and languages. Core believer
                         of hardwork beating talent. Currently enjoying the MERN stack and GraphQL schematic for APIs.
                    </p>
                </Col>

            </Row>

        </Container>
    )
}