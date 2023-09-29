import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const region = {
  latitude: -3.7621079,
  latitudeDelta: 0.0922,
  longitude: -38.4928662,
  longitudeDelta: 0.0421
}
const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#002233',
    borderRadius: 8,
    padding: 8,
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  mapview: {
    width: width,
    height: height,
  }
})


const Maps = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Maps</Text>
      <View style={Styles.inputContainer}>
        <TextInput style={Styles.textInput} />
      </View>
      <View style={Styles.mapContainer}>
        <MapView
          style={Styles.mapview}
          region={region}
          initialRegion={region}
        >
          <Marker
            title="Fortaleza"
            description="Cidade de Fortaleza"
            coordinate={{ "latitude": region.latitude, "longitude": region.longitude }}
          />
        </MapView>
      </View>
    </View >
  )
}

export default Maps
