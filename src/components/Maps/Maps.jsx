// import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api'

// const MyMapComponent = ({ idMap }) => {

//     const mapStyles = {
//         height: "80vh",
//         width: "100%"
//     };
//     console.log("holahola", idMap)
//     const defaultCenter = {
//         lat: 40.41661329677544, lng: -3.7014318987464097
//     }


//     return (

//         <LoadScript
//             googleMapsApiKey='AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA'>


//             <GoogleMap
//                 mapContainerStyle={mapStyles}
//                 zoom={13}
//                 center={defaultCenter}>

//             </GoogleMap>

//         </LoadScript>
//     )

// }



// export default MyMapComponent

// https://maps.googleapis.com/maps/api/js?key=AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA



// import React, { Component } from "react";
// import { withGoogleMap, GoogleMap } from "react-google-maps";

// const GettingStartedGoogleMap = withGoogleMap(props => (
//     <GoogleMap
//         ref={props.onMapLoad}
//         defaultZoom={5}
//         defaultCenter={{ lat: 41.85, lng: -117.65 }}
//     >
//     </GoogleMap>
// ));

// export default class GettingStartedExample extends Component {
//     handleMapLoad = this.handleMapLoad.bind(this);

//     handleMapLoad(map) {
//         this.mapComponent = map;
//         if (map) {
//             console.log(map.getZoom());
//         }
//         const directionsService = new window.google.maps.DirectionsService();
//         const directionsDisplay = new window.google.maps.DirectionsRenderer();

//         // directionsDisplay.setMap(map);

//         const makeRequest = function () {
//             calculateAndDisplayRoute(directionsService, directionsDisplay);
//         };
//         function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//             directionsService.route({
//                 origin: 'San Francisco',
//                 destination: 'Portland',
//                 travelMode: 'DRIVING'
//             }, function (response, status) {
//                 if (status === 'OK') {
//                     directionsDisplay.setDirections(response);
//                     console.log(response)
//                 } else {
//                     window.alert('Directions request failed due to ' + status);
//                 }
//             });
//         }
//         makeRequest();
//     }
//     render() {
//         return (
//             <div style={{ height: `500px` }}>
//                 <GettingStartedGoogleMap
//                     containerElement={<div style={{ height: `100%` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                     onMapLoad={this.handleMapLoad}
//                 />
//             </div>
//         );
//     }
// }



// import {
//     Box,
//     Button,
//     ButtonGroup,
//     Flex,
//     HStack,
//     IconButton,
//     Input,
//     SkeletonText,
//     Text,
// } from '@chakra-ui/react'




// import { Button } from 'react-bootstrap'

// import {
//     useJsApiLoader,
//     GoogleMap,
//     Marker,
//     Autocomplete,
//     DirectionsRenderer,
// } from '@react-google-maps/api'
// import { useRef, useState } from 'react'

// const center = { lat: 48.8584, lng: 2.2945 }

// function App() {
//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: 'AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA',
//         libraries: ['places'],
//     })

//     const [map, setMap] = useState(/** @type google.maps.Map */(null))
//     const [directionsResponse, setDirectionsResponse] = useState(null)
//     const [distance, setDistance] = useState('')
//     const [duration, setDuration] = useState('')

//     /** @type React.MutableRefObject<HTMLInputElement> */
//     const originRef = useRef()
//     /** @type React.MutableRefObject<HTMLInputElement> */
//     const destiantionRef = useRef()

//     if (!isLoaded) {
//         return <div />
//     }

//     async function calculateRoute() {
//         if (originRef.current.value === '' || destiantionRef.current.value === '') {
//             return
//         }
//         // eslint-disable-next-line no-undef
//         const directionsService = new google.maps.DirectionsService()
//         const results = await directionsService.route({
//             origin: originRef.current.value,
//             destination: destiantionRef.current.value,
//             // eslint-disable-next-line no-undef
//             travelMode: google.maps.TravelMode.BICYCLING,
//         })
//         setDirectionsResponse(results)
//         setDistance(results.routes[0].legs[0].distance.text)
//         setDuration(results.routes[0].legs[0].duration.text)
//     }

//     function clearRoute() {
//         setDirectionsResponse(null)
//         setDistance('')
//         setDuration('')
//         originRef.current.value = ''
//         destiantionRef.current.value = ''
//     }

//     return (
//         <div
//             position='relative'
//             flexDirection='column'
//             alignItems='center'
//             h='100vh'
//             w='100vw'
//         >
//             <div position='absolute' left={0} top={0} h='100%' w='100%'>
//                 {/* Google Map Box */}
//                 <GoogleMap
//                     center={center}
//                     zoom={15}
//                     mapContainerStyle={{ width: '100%', height: '100%' }}
//                     options={{
//                         zoomControl: false,
//                         streetViewControl: false,
//                         mapTypeControl: false,
//                         fullscreenControl: false,
//                     }}
//                     onLoad={map => setMap(map)}
//                 >
//                     <Marker position={center} />
//                     {directionsResponse && (
//                         <DirectionsRenderer directions={directionsResponse} />
//                     )}
//                 </GoogleMap>
//             </div>
//             <div
//                 p={4}
//                 borderRadius='lg'
//                 m={4}
//                 bgColor='white'
//                 shadow='base'
//                 minW='container.md'
//                 zIndex='1'
//             >
//                 <div spacing={2} justifyContent='space-between'>
//                     <div flexGrow={1}>
//                         <Autocomplete>
//                             <input type='text' placeholder='Origin' ref={originRef} />
//                         </Autocomplete>
//                     </div>
//                     <div flexGrow={1}>
//                         <Autocomplete>
//                             <input
//                                 type='text'
//                                 placeholder='Destination'
//                                 ref={destiantionRef}
//                             />
//                         </Autocomplete>
//                     </div>

//                     <div>
//                         <button colorScheme='pink' type='submit' onClick={calculateRoute}>
//                             Calculate Route
//                         </button>
//                         <button
//                             aria-label='center back'

//                             onClick={clearRoute}
//                         />
//                     </div>
//                 </div>
//                 <div spacing={4} mt={4} justifyContent='space-between'>
//                     <div>Distance: {distance} </div>
//                     <div>Duration: {duration} </div>
//                     <button
//                         aria-label='center back'

//                         isRound
//                         onClick={() => {
//                             map.panTo(center)
//                             map.setZoom(15)
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default App




import {
    Box,
    Flex,
    HStack,
    Input,
    Text,
    ButtonGroup,
    Button,

} from '@chakra-ui/react'


import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const center = { lat: 40.414816223121704, lng: -3.70310559750946 }

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const path = window.location.pathname

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) {
        return <div />
    }

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.BICYCLING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    return (
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            h='100vh'
            w='100vw'
        >
            <Box position='absolute' left={0} top={0} h='100%' w='80%'>
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
            <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='1'
            >
                <HStack spacing={2} justifyContent='space-between'>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input type='text' placeholder='Origin' ref={originRef} />
                        </Autocomplete>
                    </Box>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input
                                type='text'
                                placeholder='Destination'
                                ref={destiantionRef}
                            />
                        </Autocomplete>
                    </Box>

                    <ButtonGroup>
                        <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                            Calculate Route
                        </Button>
                        <Button
                            aria-label='center back'

                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
                <div spacing={4} mt={4} justifyContent='space-between'>
                    <Text>Distance: {distance} </Text>
                    <Text>Duration: {duration} </Text>
                    <button
                        aria-label='center back'

                        isRound
                        onClick={() => {
                            map.panTo(center)
                            map.setZoom(15)
                        }}
                    />
                </div>
            </Box>
        </Flex >
    )
}

export default Map
