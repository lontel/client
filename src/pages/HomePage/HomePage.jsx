import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap'


const HomePage = () => {

    const navigate = useNavigate()
    const eventList = () => {
        navigate('/events')
    }

    return (

        <>

            <section>
                <div className='home-page4'>

                    <Container>
                        <Row className='align-items-center' style={{ height: '80vh' }}>
                            <Col md={{ span: 4, offset: 5 }}>

                                <button onClick={eventList} class="btn draw-border">Looking for adventure?</button>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='first-text'>
                    <h4 >We are waiting for you to join our routes and start enjoying.</h4>
                    <p className='p-text'>Mountain bikingin is one of the best ways to explore more of this area of Spain. To help you experience the best the region has to offer, we’ve reviewed our full collection of mountain bike routes to bring you the top 20. Just click on any of the routes below to browse real tips and photos shared by other members of Komoot’s mountain biking community, to see what they liked most about these Tours—and to find the perfect mountain bike route for your next ride.</p>
                </div>

                <div className='home-page'>

                    <img src='./../../../images/imagen-index.jpg' />
                </div>
                <div className="first-text">

                    <h4>The 18 best MTB rides</h4>
                    <p className='p-text'>If you’re looking for that perfect green and safe oasis, you’ve come to the right place.Our routes are in the greenest places, where everyone can find something for themselves. It’s difficult to find such a small region offering so much anywhere else in the world.</p>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Social network of cyclists</h3>
                            <p className='p-text'>Join hundreds of routes and share special moments.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Routes throughout the country</h3>
                            <p className='p-text'>Thousands of kilometers to travel and discover new landscapes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel4.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>The best community in the world</h3>
                            <p className='p-text'>Join and enjoy the experience</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Life is life</h3>
                            <p className='p-text'>
                                Only for adventurers.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <div className='first-text'>
                <h4 > Discover the best MTB trails and single tracks to ride in Spain.</h4>
                <p className='p-text'>While enjoying the epic achievements of Spain cyclists and other top athletes, many of you might ask yourselves, what does this nation of 2 million have so that it can shine on all sport stages? Well, we could discuss this for hours. But we can point out a few reasons for the success of sport in Spain.</p>
            </div>


            <div className='home-page2'>
                <img src='./../../../images/bike-park-krvavec.jpeg' />
            </div>



            <div className='second-text'>
                <p className='p-text'>We are ready to offer you the best we have. With a great deal of responsibility,
                    your routes will be enjoyable and unforgettable.</p>
            </div>

            <div className='home-page3'>
                <img src='./../../../images/bike-park-pohorje.jpeg' />
            </div>

            <footer>

                <ul className="menu">
                    <span className='copy-right'>© All right reserved</span>
                    <li>
                        <a href="/about-us">
                            About Us
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/privacy">
                            Privacy Policy
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                            <span className="border border-top"></span>
                            <span className="border border-right"></span>
                            <span className="border border-bottom"></span>
                            <span className="border border-left"></span>
                        </a>
                    </li>

                </ul>

            </footer>
        </>



    )
}
export default HomePage