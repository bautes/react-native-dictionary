import { WHITE, BLACK, RED } from './_palette.js'
import { centerText, leftText } from './_misc'

const border = {
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 1
}

const defaultLayout = {
  flex: 1,
  width: '100%',
  ...centerText
}

export const layouts = {
  root: {
    ...defaultLayout,
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    ...defaultLayout,
    ...border,
    height: 30,
    flex: 0,
    marginTop: 20,
  },
  menu: {
    ...defaultLayout,
    ...border,
    flexDirection: 'row',
    flex: 0,
    flexShrink: 1,
    height: 50,
  },
  textIntro: {
    ...defaultLayout,
    flex: 1,
    height: '50%',
    ...leftText
  },
  textResults: {
    ...defaultLayout,
    flex: 1,
    height: '50%',
  },
  sepparatorLayout: {
    ...defaultLayout,
    flex: 1,
    width: 10,
    height: 'auto',
    flexShrink: 1,
  },
  languageLayout: {
    ...defaultLayout,
    ...border,
    height: 50,
  },
}
