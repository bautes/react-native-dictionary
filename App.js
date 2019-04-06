import React from 'react';
import { Text, View } from 'react-native';
import { layout } from 'styles';
import { Header, LanguageBar, TranslateBox } from 'views';

export default class App extends React.Component {
  render() {
    return (
      <View style={layout.root}>
        <View style={layout.header}>
          <Header />
        </View>
        <View style={layout.menu}>
          <LanguageBar />
        </View>
        <View style={layout.textIntro}>
          <TranslateBox onTranslate={textTranslated => console.log(textTranslated)} />
        </View>
        <View style={layout.textResults}>

        </View>
      </View>
    );
  }
}
