import { WHITE, BLACK, RED } from './_palette.js'
import { centerText, leftText, border } from './_misc'

export const boxes = {
  text: {
    width: '100%',
    borderColor: RED,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'auto',
  },
  examplesComponent: {
    ...leftText,
    width: '100%'
  },
  leftPadded: {
    paddingLeft: 20
  },
  expansible: {
    width: '100%',
    borderColor: RED,
    borderWidth: 1,
  }
}
