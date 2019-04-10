import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { Text } from 'react-native'

class TermTypeComponent extends Component {

  render() {
    return (
      <Text>{this.props.termDescription}</Text>
    )
  }
}

TermTypeComponent.propTypes = {
  termDescription: PropTypes.string
}

export default TermTypeComponent
