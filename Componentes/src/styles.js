import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#134bcb',
  },
  image: {
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    color: '#cddced',
    marginVertical: 16,
  },
  textTitle: {
    fontSize: 32
  },
  textSubTitle: {
    fontSize: 24
  },
  button: {
    backgroundColor: '#0498b4',
    margin: 8,
    padding: 16,
    borderRadius: 4
  },
  buttonText: {
    alignSelf: 'center',
    color: '#cddced',
    fontSize: 18
  }
})

export default styles
export { styles }
