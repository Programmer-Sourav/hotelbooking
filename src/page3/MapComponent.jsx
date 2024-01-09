import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, Marker } from "@vis.gl/react-google-maps";

export default function MapComponent(){
    let map;
    
    const position = { lat: 23.31, lng: 91.56 }
    return(
        <APIProvider key="">
        <div style={{height: "90%", width: "100%"}}> 
         {
           <Map zoom={10} center={position}>
            <Marker position={position}></Marker>
           </Map>
         }
        </div>
        </APIProvider>
    )
}