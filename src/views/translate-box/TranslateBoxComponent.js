import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { Textarea, Button } from 'ui';

class TranslateBoxComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  updateText(text) {
    this.setState({text})
  }

  translateText() {
    this.props.onTranslate('text has been translated')
  }

  render() {
    return (
      <Fragment>
        <Textarea initialValue="" onChange={text => this.updateText(text)} />
        <Button onClick={() => this.translateText()} />
      </Fragment>
    )
  }
}

TranslateBoxComponent.propTypes = {
  onTranslate: PropTypes.func
}

export default TranslateBoxComponent
