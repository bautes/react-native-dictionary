import { WHITE, BLACK, RED } from './_palette.js'
import { centerText, leftText } from './_misc'

export const fonts = {
  paragraph: {
    ...leftText,
    color: BLACK,
    fontSize: 16,
    width: '100%'
  },
  h1: {
    ...centerText,
    height: 'auto',
    color: BLACK
  },
  button: {
    ...centerText,
    height: 'auto',
    color: BLACK
  },
  inline: {
    flexDirection: 'column'
  },
  small: {
    fontSize: 12
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  }
}
