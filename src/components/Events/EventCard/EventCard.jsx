import './EventCard.css'
import { Card, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


const EventCard = ({ origin, destination, _id, eventPic }) => {

    return (

        <Card className="UserCard mb-4" id='event-carousel'>
            <Card.Body>
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100" id='events-pic'
                            src={eventPic[0]}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>The event is from {origin.address} to {destination.address}</h3>
                            <p>Estamos de risa</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100" id='events-pic'
                            src={eventPic[1]}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>

                {/* <img className='event-pic' src={eventPic[0]} /> */}

                <p>The event is from {origin.address} to {destination.address} </p>
                <Link to={`/events/details/${_id}`}>

                    <button class="cta">
                        <span class="hover-underline-animation"> More Details </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>


            </Card.Body>

        </Card >

    )
}

export default EventCard   