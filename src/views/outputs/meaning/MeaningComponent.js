import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';
import { Paragraph, Bold, Italic, Small } from 'ui'
import { TermType } from '../term-types'
//import { Examples } from '../examples'
import { get, map } from 'lodash'

//        <TermType termDescription={get(translation, 'grammar')} />
//        <Label term={get(translation, 'text')} />
//        <Examples terms={get(translation, 'examples')} />

class MeaningComponent extends Component {
  render() {
    let translations = get(this.props.translation, 'translations', [])
    return (
      translations.map((tr, k) => {
        let example = map(tr.examples, ex => (`${ex.text} "${ex.translate[0]}"`))
        return (
          <Paragraph key={k}>
            <Bold>{tr.translation}</Bold>
            <Italic> ({tr.grammar}) </Italic>
            <Small>{example}</Small>
          </Paragraph>
        )
      })
    )
  }
}

MeaningComponent.propTypes = {
  translation: PropTypes.object
}

export default MeaningComponent
