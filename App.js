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
      from: 'de',
      to: 'en'
    }
  }

  changeLanguages(langPair) {
    let [from, to] = langPair.split('-')
    this.setState({from, to})
  }

  whenTranslate(text) {
    let {from, to} = this.state
    defineOrTranslate(
      text,
      from,
      to,
      response => this.setState({results: response}),
      error => console.log(error)
    )
  }


  render() {
    let {from, to} = this.state
    return (
      <View style={layout.root}>
        <View style={layout.header}>
          <Header />
        </View>
        <View style={layout.menu}>
          <LanguageBar defaultPair={[from, to]} onLanguageChange={langPair => this.changeLanguages(langPair)} />
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
