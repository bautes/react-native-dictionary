import React from 'react';
import { Text, View } from 'react-native';
import { layout } from 'styles';
import { Header, LanguageBar, TextEntryAndCTA, Translation } from 'views';
import { defineOrTranslate } from 'services/translateService'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      translations: [],
      langPair: 'en-ru'
    }
  }

  changeLanguages(langPair) {
    this.setState({langPair})
  }

  whenTranslate(text) {
    defineOrTranslate(
      text,
      this.state.langPair,
      response => this.setState({translations: response}),
      error => console.log(error)
    )
  }

  render() {
    return (
      <View style={layout.root}>
        <View style={layout.header}>
          <Header />
        </View>
        <View style={layout.menu}>
          <LanguageBar onLanguageChange={langPair => this.changeLanguages(langPair)} />
        </View>
        <View style={layout.textIntro}>
          <TextEntryAndCTA onTranslate={text => this.whenTranslate(text)} />
        </View>
        <View style={layout.textResults}>
          <Translation translations={this.state.translations} />
        </View>
      </View>
    );
  }
}
