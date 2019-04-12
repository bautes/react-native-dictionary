import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { TextInput, StyleSheet } from 'react-native';
import { font, box } from 'styles';
import omit from 'lodash/omit'

class ExpansibleTextareaComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: this.props.initialValue, height: 0};
  }

  onChange(event) {
    this.setState({
      text: event.nativeEvent.text
    }, () => this.props.onChange(this.state.text))
  }

  onContentSizeChange(event) {
     if (this.props.maxHeight < event.nativeEvent.contentSize.height) return
     this.setState({
       height: event.nativeEvent.contentSize.height
     })
  }

  render() {
    return (
      <TextInput
        {...omit(this.props, ['maxHeight'])}
        multiline={true}
        onChange={ev => this.onChange(ev)}
        onContentSizeChange={ev => this.onContentSizeChange(ev)}
        style={[box.expansible, (this.props.style || {}), {height: Math.max(35, this.state.height)}]}
        value={this.state.text}
      />
    );
  }
}

ExpansibleTextareaComponent.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.string
}

export default ExpansibleTextareaComponent
