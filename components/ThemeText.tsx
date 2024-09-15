import { GlobalsStyle } from '@/styles/globals-style'
import { StyleSheet, Text, type TextProps, View } from 'react-native'

interface Props extends TextProps {
  variant?: 'h1' | 'h2'
}


const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
  return (
    <Text
      style={
        [
          {
            color: 'white',
            fontFamily: 'SpaceMono',
            fontWeight: '700',

          },
          variant === 'h1' && GlobalsStyle.mainResult,
          variant === 'h2' && GlobalsStyle.secondaryResult,
        ]
      }
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  )
}
export default ThemeText;