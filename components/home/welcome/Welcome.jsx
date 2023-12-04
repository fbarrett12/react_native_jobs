import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Fredrick</Text>
        <Text style={styles.welcomeMessage}>Welcome to JobLobby</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            placeholder="What are you looking for?"
            onChange={() => {}}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome