import { WHITE, BLACK, RED } from './_palette.js'
import { centerText } from './_misc'

export const fonts = {
  paragraph: {
    color: BLACK,
    fontSize: 20
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
