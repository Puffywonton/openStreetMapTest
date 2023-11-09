import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { useState } from 'react'


function App() {
  const [markers, setMarkers] = useState([
    {
      geocode: [48.86, 2.3522],
      popUp: "caca 1",
      img: "/pictures/macaron.jpg"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "caca 2",
      img: "/pictures/zemmour.jpg"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "caca 3",
      img: "/pictures/sardine.jpg"
    },
  ])


  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4063/4063526.png ",
    iconSize: [38, 38]
  })

  const addCaca = () => {
    setMarkers([
      ...markers,
      {
        geocode: [48.845, 2.3545],
        popUp: "nouveau caca",
        img: "/public/pictures/merluche.jpg"
      }
    ]) 
    console.log('added caca')
  }


  return (
    <>
      <h1>La carte des cacas de Paris</h1>
      <button onClick={addCaca}>Ajouter un caca</button>
      <MapContainer className='map' center={[48.8566, 2.3522]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerClusterGroup
          chunkedLoading
        >
          {markers.map((marker, index) => (
            <Marker position={marker.geocode} key={index} icon={customIcon}>
              <Popup>
                <p>{marker.popUp}</p>
                <img src={marker.img}></img>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  )
}

export default App
