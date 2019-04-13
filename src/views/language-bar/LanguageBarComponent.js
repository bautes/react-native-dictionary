import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import { layout } from 'styles'
import { View, Text } from 'react-native'
import { findIndex } from 'lodash'
import { default as LanguageList } from './LanguageListComponent'
import { getLanguagesList } from 'services/translateService'

class LanguageBarComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      languagesList: [],
      langPair: this.props.defaultPair
    }
    getLanguagesList
      .then(languagesList => this.initDefaultPair(languagesList, this.state.langPair))
      .then(languagesList => this.setState({languagesList}))
  }

  initDefaultPair(languages, [from, to]) {
    const from_to = {
      from: (findIndex(languages, ['1', from]) > 0 ? from : null),
      to: (findIndex(languages, ['1', to]) > 0 ? to : null)
    }
    this.setState({...from_to})
    return languages
  }

  onLanguageChange(idx, item) {
    let langPair = this.state.langPair
    langPair[idx] = item;
    this.setState({
      langPair
    })
    this.props.onLanguageChange(langPair.join('-'))
  }

  render() {
    return (
      <Fragment>
        <View style={layout.languageLayout}>
          <LanguageList value={this.state.from} onChange={value => this.onLanguageChange(0, value)} languagesList={this.state.languagesList} />
        </View>
        <View style={layout.sepparatorLayout}><Text>or</Text></View>
        <View style={layout.languageLayout}>
          <LanguageList value={this.state.to} onChange={value => this.onLanguageChange(1, value)} languagesList={this.state.languagesList} />
        </View>
      </Fragment>
    )
  }
}

LanguageBarComponent.propTypes = {
  defaultPair: PropTypes.array
}

export default LanguageBarComponent
