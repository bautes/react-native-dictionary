import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { font } from 'styles'
import { Text, View } from 'react-native';

class BoldComponent extends Component {
  render() {
    return (
      <Text style={font.bold}>{this.props.children}</Text>
    )
  }
}
BoldComponent.propTypes = {
  chilren: PropTypes.any
}

class ItalicComponent extends Component {
  render() {
    return (
      <Text style={font.italic}>{this.props.children}</Text>
    )
  }
}
ItalicComponent.propTypes = {
  chilren: PropTypes.any
}

class SmallComponent extends Component {
  render() {
    return (
      <Text style={font.small}>{this.props.children}</Text>
    )
  }
}
SmallComponent.propTypes = {
  chilren: PropTypes.any
}

class ParagraphComponent extends Component {
  render() {
    return (
      <Text style={font.paragraph}>{this.props.children}</Text>
    )
  }
}
ParagraphComponent.propTypes = {
  chilren: PropTypes.any
}

class InlineComponent extends Component {
  render() {
    return (
      <View style={font.small}>{this.props.children}</View>
    )
  }
}
InlineComponent.propTypes = {
  chilren: PropTypes.any
}

export { BoldComponent as Bold }
export { ItalicComponent as Italic }
export { SmallComponent as Small }
export { ParagraphComponent as Paragraph }
export { InlineComponent as Inline }
