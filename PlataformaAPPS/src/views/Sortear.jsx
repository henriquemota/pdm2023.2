import { useState } from 'react'
import { FlatList, TextInput, View } from 'react-native'
import { Button, Container, FlatlistItem, Result } from '../components'
import Styles from '../styles'

export default function Sortear() {
  const [sorteada, setSorteada] = useState('')
  const [pessoa, setPessoa] = useState('')
  const [data, setData] = useState([])

  function inserirPessoa() {
    setData([...data, pessoa])
    setPessoa('')
  }

  function sortear() {
    const indice = Math.floor((Math.random() * data.length))
    setSorteada(`A pessoa sorteada foi ${data[indice]}`)
  }

  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={[Styles.input, { flex: 1 }]}
          value={pessoa}
          onChangeText={setPessoa}
        />
        <Button
          label='+'
          onPress={inserirPessoa}
        />
      </View>
      <Button
        label='Sortear'
        onPress={sortear}
      />
      <Result label={sorteada} />
      <FlatList
        data={data}
        renderItem={({ item }) => <FlatlistItem item={item} />}
        keyExtractor={item => item}
      />
    </Container>
  )
}