import './Maps.css'
import { Box, Flex, HStack, Input, Text, ButtonGroup, Button, Link } from '@chakra-ui/react'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import { useRef, useState } from 'react'


const center = { lat: 40.414816223121704, lng: -3.70310559750946 }

function Map({ event }) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const originRef = useRef()
    const destiantionRef = useRef()

    if (!isLoaded) {
        return <div />
    } else {
        calculateRoute()
    }

    async function calculateRoute() {

        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()

        const results = await directionsService.route({

            origin: event.origin.address,
            destination: event.destination.address,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.BICYCLING,
        })

        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    // function clearRoute() {
    //     setDirectionsResponse(null)
    //     setDistance('')
    //     setDuration('')
    //     originRef.current.value = ''
    //     destiantionRef.current.value = ''
    // }

    return (
        <Flex className='map-route' >
            <Box position='absolute' left={0} top={0} h='60%' w='50%'>
                {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={7}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >
                    <Marker position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </Box>
            <Box className='details-map'
                p={1}
                borderRadius='lg'
                m={1}

                shadow='base'
                minW='container.md'
                zIndex='1'
            >
                <HStack spacing={2} className='chat-user'>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Link type='text' placeholder='Origin' ref={originRef} />
                        </Autocomplete>
                    </Box>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Link
                                type='text'
                                placeholder='Destination'
                                ref={destiantionRef}
                            />
                        </Autocomplete>
                    </Box>
                </HStack>

                <HStack className='route-info'  >
                    <Text>Distance: {distance} Duration: {duration} </Text>
                </HStack>
            </Box>
        </Flex >
    )
}

export default Map
