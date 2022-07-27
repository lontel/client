import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

const HomePage = () => {

    const navigate = useNavigate()
    const eventList = () => {
        navigate('/events')
    }

    return (

        <>
            <section>
                <div className='home-page4'>
                    <button onClick={eventList} class="btn draw-border">Looking for adventure?</button>
                </div>
                <h4 className='second-text'>We are waiting for you to join our routes and start enjoying.</h4>

                <div className='home-page'>


                </div>
                <div className="first-text">

                    <h4>We are waiting for you to join our routes and start enjoying.</h4>

                    <p>If you’re looking for that perfect green and safe oasis, you’ve come to the right place.Our routes are in the greenest places, where everyone can find something for themselves. It’s difficult to find such a small region offering so much anywhere else in the world.</p>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel4.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./../../../images/carousel3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <div className='home-page2'>

            </div>
            <div className='second-text'>
                <p>We are ready to offer you the best we have. With a great deal of responsibility,

                    your routes will be enjoyable and unforgettable.</p>
            </div>
            <div className='home-page3'>

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