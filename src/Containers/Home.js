import React from 'react'
import './Style/HomeStyle.css'
import { Container, Row, Col } from 'reactstrap'
import CircleImage from '../Components/CircleImage'
import PortfolioCard from '../Components/PortfolioCard'

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



            <Row className='d-flex flex-column home-row-two align-items-center p-4 align-content-center'>
                <h3 className='portfolio-title'>Portfolio</h3>
                <div className='d-flex flex-row flex-wrap justify-content-around'>
                    <PortfolioCard
                        image={require('../Images/sqillit.png')}></PortfolioCard>
                    <PortfolioCard
                        image={require('../Images/sqillit.png')}></PortfolioCard>
                    <PortfolioCard
                        image={require('../Images/sqillit.png')}></PortfolioCard>

                </div>

            </Row>


        </Container>
    )
}