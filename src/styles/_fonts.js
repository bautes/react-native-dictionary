import { WHITE, BLACK, RED } from './_palette.js'
import { centerText, leftText } from './_misc'

export const fonts = {
  paragraph: {
    ...leftText,
    color: BLACK,
    fontSize: 16,
    width: '100%'
  },
  title: {
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

export const H1 = {
  ...fonts.title,
  fontSize: '14px'
}
