import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import { Label } from 'ui'
import { Meaning } from './meaning/'
import get from 'lodash/get'

class TranslationComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.translations.map((tr, index) => (<View key={index}>
        <Meaning translation={tr} />
      </View>)
      )
    )
  }
}

/*
en-sp
good

bueno (adverbio) "comer sano es bueno <i>(to eat healthy is good)</i>"
bien (sustantivo) "..."
...
sinonimos: well, nice,

antonimos:

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
*/

TranslationComponent.propTypes = {
  translations: PropTypes.array
}

export default TranslationComponent
