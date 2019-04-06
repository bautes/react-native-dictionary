import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, StyleSheet } from 'react-native';
import { font, button } from 'styles';

const buttonStyle = StyleSheet.create({
  default: {
    ...font.button,
    ...button.default
  }
})

class ButtonComponent extends Component {

  constructor(props) {
    super(props);
  }

  onClick() {
    this.props.onClick()
  }

  render() {
    return (
      <Button
        onPress={this.onClick}
        title="Translate"
        style={buttonStyle.default}
      />
    )
  }
}

ButtonComponent.propTypes = {
  chilren: PropTypes.any
}

export default ButtonComponent
