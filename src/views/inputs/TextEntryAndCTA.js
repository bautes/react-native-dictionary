import React, {Component, Fragment} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types'
import { Expansible, Button } from 'ui'

class TextEntryAndCTA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  updateText(text) {
    this.setState({text})
  }

  translateText() {
    this.props.onTranslate(this.state.text)
  }

  render() {
    return (
      <Fragment>
        <Button onClick={() => this.translateText()} />
        <Expansible initialValue="" onChange={text => this.updateText(text)} maxHeight={100} />
      </Fragment>
    )
  }
}

TextEntryAndCTA.propTypes = {
  onTranslate: PropTypes.func
}

export default TextEntryAndCTA
