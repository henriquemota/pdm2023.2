import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useCEP } from '../hooks/cep'

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
    borderRadius: 4,
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
  const [address, setAddress] = useState()
  const { getAddress } = useCEP()
  const { navigate } = useNavigation()

  const handleText = async (text) => {
    if (text.length === 8) {
      const temp = await getAddress(text)
      setAddress(temp)
    } else {
      setAddress()
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.textInput}
          maxLength={8}
          placeholder='informe seu CEP'
          onChangeText={handleText}
        />
      </View>
      <View style={Styles.mapContainer}>
        <MapView
          style={Styles.mapview}
          region={address ? {
            latitude: address.lat,
            latitudeDelta: 0.0922,
            longitude: address.lng,
            longitudeDelta: 0.0421
          } : region}
          initialRegion={region}
        >
          {address && (
            <Marker
              title={`CEP - ${address.cep}`}
              description={`${address.address}, ${address.district} - ${address.city}/${address.state}`}
              coordinate={{ "latitude": address.lat, "longitude": address.lng }}
              onCalloutPress={() => navigate('Details')}
            />
          )}
        </MapView>
      </View>
    </View >
  )
}

export default Maps
