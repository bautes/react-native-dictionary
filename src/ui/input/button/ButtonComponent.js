import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Button, StyleSheet } from 'react-native';
import { font, button } from 'styles';

const ButtonComponent = ({onClick, title}) => {
  return (
    <Button
      onPress={onClick}
      title={title}
      style={[font.button, button.default]} />
  )
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func
}

export default ButtonComponent
