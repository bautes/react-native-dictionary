import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { TermType, Meaning, Examples } from 'views'
import get from 'lodash/get'

class TranslationComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("to render", this.props.translations)
    return (
      this.props.translations.map((translation, index) => {
        return (
          <View key={index}>
            <TermType termDescription={get(translation, 'grammar')} />
            <Meaning term={get(translation, 'text')} />
            <Examples terms={get(translation, 'examples')} />
            <View> // sinonimos
              get(translation, 'synonyms', []).map((syn, index) => {
                <TermType termDescription={get(syn, 'grammar')} />
                <Meaning term={get(syn, 'text')} />
                <Examples terms={get(syn, 'examples')} />
              })
            </View>
            // antonimos
          </View>
        )
      })
    )
  }
}

TranslationComponent.propTypes = {
  translations: PropTypes.object
}

export default TranslationComponent
