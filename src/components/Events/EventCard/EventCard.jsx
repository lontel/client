import './EventCard.css'
import { Card, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


const EventCard = ({ origin, destination, _id, eventPic }) => {

    return (

        <Card className="UserCard mb-4">
            <Card.Body>
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
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
                            className="d-block w-100"
                            src={eventPic[1]}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>

                {/* <img className='event-pic' src={eventPic[0]} /> */}

                <p>The event is from {origin.address} to {destination.address} </p>
                <Link to={`/events/details/${_id}`}>

                    <div className="d-grid">
                        <Button variant="dark" size="sm" as="div">Show more details</Button>
                    </div>
                </Link>


            </Card.Body>

        </Card >

    )
}

export default EventCard   