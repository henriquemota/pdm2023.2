import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfb33',
    flex: 1,
    padding: 16,
  },
  logo: {
    width: 240,
    height: 240,
    alignSelf: 'center',
  },
  title: {
    color: '#445cfa',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    padding: 16,
    backgroundColor: '#fff',
    borderColor: '#b3bd7c',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#445cfa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
})

export default Styles