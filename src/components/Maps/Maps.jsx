import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api'

const MyMapComponent = ({ idMap }) => {

    const mapStyles = {
        height: "80vh",
        width: "100%"
    };
    console.log("holahola", idMap)
    const defaultCenter = {
        lat: 40.41661329677544, lng: -3.7014318987464097
    }


    return (

        <LoadScript
            googleMapsApiKey='AIzaSyDyJLzEV4bMHGkkovvuE00bI7PJjY1QgSA'>


            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>

            </GoogleMap>

        </LoadScript>
    )

}



export default MyMapComponent

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




