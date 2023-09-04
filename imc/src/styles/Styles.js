import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#8C5BFD',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    alignSelf: 'center',
    marginVertical: 32,
    color: '#5BD6FD',
  },
  input: {
    backgroundColor: '#fff',
    margin: 8,
    padding: 8,
    fontSize: 24,
    borderRadius: 8
  },
  button: {
    backgroundColor: '#5652E3',
    margin: 8,
    padding: 8,
    fontSize: 24,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#fff',
  },
  message: {
    fontSize: 48,
    fontWeight: '400',
    alignSelf: 'center',
    marginVertical: 32,
    color: '#5BD6FD',
  },
})

export default Styles
export { Styles }
