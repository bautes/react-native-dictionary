import React from 'react';
import { View, ScrollView } from 'react-native';
import { layout } from 'styles';
import { Header, LanguageBar, TextEntryAndCTA, RenderResults } from 'views';
import { defineOrTranslate } from 'services/translateService'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [{
        translations: [{
          grammar: 'adv',
          translation: 'test',
          examples: [{
            text: 'test 1',
            translate: ['hola', 'mundo']
          }]
        }]
      }],
      langPair: 'de-ru'
    }
  }

  changeLanguages(langPair) {
    this.setState({langPair})
  }

  whenTranslate(text) {
    defineOrTranslate(
      text,
      this.state.langPair,
      response => this.setState({results: response}),
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
          <LanguageBar defaultPair={this.state.langPair} onLanguageChange={langPair => this.changeLanguages(langPair)} />
        </View>
        <TextEntryAndCTA onTranslate={text => this.whenTranslate(text)} />
        <View style={layout.textResults}>
          <ScrollView>
            <RenderResults results={this.state.results} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
