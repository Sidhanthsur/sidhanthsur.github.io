import React from 'react'
import './Style/HomeStyle.css'
import { Container, Row, Col } from 'reactstrap'
import CircleImage from '../Components/CircleImage'

export default function Home() {
    return (
        <Container className='home-main' fluid>
            <Row className='home-row-one'>
                <Col lg='4' className='home-col-one'>
                    <CircleImage></CircleImage>
                </Col>
                <Col lg='8'>
                    <p className='home-intro'>
                        Hi ! I am Sidhanth , a full stack Javascript developer. I love to experiment and tinker with new technology.
                        I believe in learning by doing and that hardwork always beats talent.
                    </p>
                </Col>
            </Row>

        </Container>
    )
}