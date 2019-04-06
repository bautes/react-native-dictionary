import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { font } from 'styles'
import { Text } from 'react-native'

class TitleComponent extends Component {

  render() {
    return (
      <Text style={font.title}>{this.props.children}</Text>
    )
  }
}

TitleComponent.propTypes = {
  chilren: PropTypes.any
}

export default TitleComponent
