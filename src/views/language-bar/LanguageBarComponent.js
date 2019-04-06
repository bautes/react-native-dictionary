import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { layout } from 'styles';
import { View } from 'react-native';
import { Title } from 'ui';
import { Text } from 'react-native'

class LanguageBarComponent extends Component {

  render() {
    return (
      <Fragment>
        <View style={layout.languageLayout}>
          <Title>EN</Title>
        </View>
        <View style={layout.sepparatorLayout}><Text>or</Text></View>
        <View style={layout.languageLayout}>
          <Title>RU</Title>
        </View>
      </Fragment>
    )
  }
}

export default LanguageBarComponent
