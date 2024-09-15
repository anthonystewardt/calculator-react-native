import { Colors } from '@/constants/Colors'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Platform } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar'

const isAndroid = Platform.OS === 'android'

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black')
}


const _layout = () => {

  const [loaded] = useFonts({
    'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={{
      backgroundColor: Colors.background,
      flex: 1,
    }}>

      <Slot />
      <StatusBar
        style="auto"
      />
    </View>
  )
}
export default _layout