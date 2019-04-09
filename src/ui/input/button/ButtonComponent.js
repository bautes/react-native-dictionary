import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, StyleSheet } from 'react-native';
import { font, button } from 'styles';

const buttonStyle = StyleSheet.create({
  default: {
    ...font.button,
    ...button.default,
    flex: 10
  }
})

class ButtonComponent extends Component {

  render() {
    return (
      <Button
        onPress={this.props.onClick}
        title="Translate"
        style={buttonStyle.default}
      />
    )
  }
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func
}

export default ButtonComponent
