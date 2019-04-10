import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { Label } from 'ui'
import { Meaning } from './meaning/'
import get from 'lodash/get'

class TranslationComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.translations.map((translation, index) => {
        return (
          <View key={index}>
            <Meaning translation={translation} />
            <View> // sinonimos
              get(translation, 'synonyms', []).map((syn, index) => {
                <Meaning translation={syn} />
              })
            </View>
            <View> // antonimos
              get(translation, 'anthonyms', []).map((ant, index) => {
                <Meaning translation={ant} />
              })
            </View>
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
