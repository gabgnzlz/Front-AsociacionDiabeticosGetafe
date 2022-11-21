import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function MyComponent() {   //Aquí fijaremos un un alto y un ancho para nuestro mapa
  const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {    //Estas coordenadas son el centro sobre el cual se va a situar el mapa al renderizarse por primera vez.
  lat: 40.31078683565979, 
  lng: -3.7293335376663164
};
  const { isLoaded } = useJsApiLoader({  //permite cargar el api con el identificador y su llave
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBJPN3AT0XqKKz02CXnVSPWxgL9H9jVGms" //Es un autenticador único para identificar a un usuario
  })

  const [map, setMap] = React.useState(null)  // Es un Hooks que nos permite colocar el mapa dentro de la pagina, al principio esta vacio

  const onLoad = React.useCallback(function callback(map) {  // callback nos permite llamar la funcion que carga el mapa
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap({center})  //carga el mapa con las coordenadas del centro y hace cambio de estado.
  }, [])

  const onUnmount = React.useCallback(function callback(map) { // como solo vamos a cargar una ves el mapa, desmontamos el hooks
    setMap ({center})
  }, [])

  return isLoaded ? (   // lo que va a devolver es el mapa, se renderizara en la pagina
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}    //Es un valor numérico el cual nos indica lo cerca o lejos que mostrará el mapa de las coordenadas centrales que le pasemos.
       
        onUnmount={onUnmount} 
      >
       
          <Marker      //Son los puntos marcados sobre el mapa, Por cada par de coordenadas tendremos un puntero en el mapa
           position={center}
        options={{ map: GoogleMap }}/>

      </GoogleMap>
  ) : <></>
}

export default MyComponent // actualiza el documento 