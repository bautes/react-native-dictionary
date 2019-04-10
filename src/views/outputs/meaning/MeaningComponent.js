import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
//import { Label } from 'ui'
//import { TermType } from '../term-types'
//import { Examples } from '../examples'
import get from 'lodash/get'

//        <TermType termDescription={get(translation, 'grammar')} />
//        <Label term={get(translation, 'text')} />
//        <Examples terms={get(translation, 'examples')} />

class MeaningComponent extends Component {
  render() {
    return (
      null
    )
  }
}

MeaningComponent.propTypes = {
  translation: PropTypes.object
}

export default MeaningComponent
