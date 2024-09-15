import { Colors } from '@/constants/Colors'
import { GlobalsStyle } from '@/styles/globals-style'
import { View, Text, Pressable } from 'react-native'
import * as Haptics from 'expo-haptics';

interface Props {
  label: string,
  color?: string,
  blackText?: boolean,
  onPress?: () => void,
  doubleSize?: boolean
}


const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
  doubleSize = false
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...GlobalsStyle.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80
      })}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        onPress && onPress()
      }}
    >
      <Text style={{
        ...GlobalsStyle.buttonText,
        color: blackText ? "black" : "white"
      }}>{label}</Text>
    </Pressable>
  )
}
export default CalculatorButton