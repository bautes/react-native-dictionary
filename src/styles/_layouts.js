import { WHITE, BLACK, RED } from './_palette.js'
import { border, centerText, leftText } from './_misc'

const defaultLayout = {
  flex: 1,
  width: '100%'
}

export const layouts = {
  root: {
    ...defaultLayout,
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    ...defaultLayout,
    ...centerText,
    ...border,
    height: 25,
    flex: 0,
  },
  menu: {
    ...defaultLayout,
    flexDirection: 'row',
    flex: 0,
    flexShrink: 1,
    height: 50,
  },
  textIntro: {
    ...defaultLayout,
    ...leftText,
    flex: 1,
  },
  textResults: {
    ...defaultLayout,
    padding: 10,
    flex: 4,
  },
  sepparatorLayout: {
    ...defaultLayout,
    ...centerText,
    flex: 1,
    width: 10,
    flexShrink: 1,
  },
  languageLayout: {
    ...defaultLayout,
    ...centerText,
    ...border,
    flex: 1,
    height: '100%',
  },
}
