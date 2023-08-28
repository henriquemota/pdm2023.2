import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#144bc8',
    justifyContent: 'center'
  },
  image: {
    alignSelf: 'center',
    marginVertical: 8,
  },
  text: {
    marginVertical: 8,
    alignSelf: 'center',
    color: '#fff',
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 900,
  },
  textSubTitle: {
    fontSize: 24,
    fontWeight: 600,
  },
  button: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#00a28e',
    marginHorizontal: 24,
    marginVertical: 8,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }


})

export default Styles
export { Styles }
