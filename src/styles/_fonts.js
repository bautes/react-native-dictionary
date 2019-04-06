import { WHITE, BLACK, RED } from './_palette.js'
import { centerText } from './_misc'

export const fonts = {
  paragraph: {
    ...centerText,
    color: BLACK
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
  }
}

export const H1 = {
  ...fonts.title,
  fontSize: '14px'
}
