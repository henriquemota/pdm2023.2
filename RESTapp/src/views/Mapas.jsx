import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useMarkers } from '../hooks'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})

const Mapas = () => {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [marcadores, setMarcadores] = useState([])
  const { getAll } = useMarkers()

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()

  }, [])

  useEffect(() => {
    getAll()
      .then(e => {
        const data = []
        Object.entries(e).forEach(([, value]) => data.push(value))
        setMarcadores(data)
      })
  }, [])

  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.map}
        initialRegion={{
          "latitude": -3.7933145,
          "latitudeDelta": 0.0922,
          "longitude": -38.5196152,
          "longitudeDelta": 0.0421,
        }}
      >
        {marcadores.map((el, ix) =>
          <Marker
            key={ix}
            title={el.title}
            description={el.description}
            coordinate={{
              "latitude": el.coordinate.latitude,
              "longitude": el.coordinate.longitude,
            }}
          />
        )}
      </MapView>
    </View>
  )
}

export default Mapas