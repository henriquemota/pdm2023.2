import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#420A70',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 8
  },
  input: {
    padding: 16,
    backgroundColor: '#8E16F0',
    borderColor: '#B05EF2',
    borderWidth: 2,
    borderRadius: 4,
    margin: 8,
    fontSize: 16,
    fontWeight: 900,
    color: '#fff',
  },
  button: {
    padding: 16,
    backgroundColor: '#B05EF2',
    borderColor: '#6F11BD',
    borderWidth: 2,
    borderRadius: 16,
    margin: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  },
  result: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 32,
    alignSelf: 'center'
  },
  itemContainer: {
    margin: 8,
    backgroundColor: '#512C70',
    padding: 8
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  }
})

export default Styles
export { Styles }
