import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const position = {
   lat: -22.971154946327438,
   lng: -47.12371359999999
}

export function GoogleMaps() {
   const { isLoaded } = useJsApiLoader({
      id: "google-maps-script",
      googleMapsApiKey: import.meta.env.VITE_API_GOOGLE_TOKEN,
   });

   return (
      isLoaded ? (
         <GoogleMap
           mapContainerStyle={{width: "100%", height: "100%"}}
           center={position}
           zoom={15}
         >
            { <Marker position={position} /> }
         </GoogleMap>
     ) : <></>
   );
};
