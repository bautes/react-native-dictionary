import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { font } from 'styles'
import { Text, View } from 'react-native';

const BoldComponent = ({children}) => {
  return (
    <Text style={font.bold}>{children}</Text>
  )
}
BoldComponent.propTypes = {
  chilren: PropTypes.any
}

const ItalicComponent = ({children}) => {
  return (
    <Text style={font.italic}>{children}</Text>
  )
}
ItalicComponent.propTypes = {
  chilren: PropTypes.any
}

const SmallComponent = ({children}) => {
  return (
    <Text style={font.small}>{children}</Text>
  )
}
SmallComponent.propTypes = {
  chilren: PropTypes.any
}

const ParagraphComponent = ({children}) => {
  return (
    <Text style={font.paragraph}>{children}</Text>
  )
}
ParagraphComponent.propTypes = {
  chilren: PropTypes.any
}

const H1Component = ({children}) => {
  return (
    <Text style={font.h1}>{children}</Text>
  )
}
H1Component.propTypes = {
  chilren: PropTypes.any
}

export { BoldComponent as Bold }
export { ItalicComponent as Italic }
export { SmallComponent as Small }
export { ParagraphComponent as Paragraph }
export { H1Component as H1 }
