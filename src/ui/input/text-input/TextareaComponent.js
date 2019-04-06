import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { TextInput, StyleSheet } from 'react-native';
import { font, box } from 'styles';

const textInputStyle = StyleSheet.create({
  default: {
    ...font.paragraph,
    ...box.text
  }
})

class TextareaComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { text: this.props.initialValue || '' };
  }

  onChangeText(text) {
    this.setState({text})
    this.props.onChange(text)
  }

  render() {
    return (
      <TextInput
        multiline={true}
        style={textInputStyle.default}
        onChangeText={text => this.onChangeText(text)}
        value={this.state.text} />
    )
  }
}

TextareaComponent.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.string
}

export default TextareaComponent
