import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { Paragraph, Bold, Italic, Small } from 'ui'
import { default as Examples } from './examples/ExamplesComponent'
import { get, map } from 'lodash'

class MeaningComponent extends Component {
  render() {
    return (
      this.props.translations.map((tr, k) => {
        return (
          <Fragment key={k}>
            <Paragraph>
              <Bold>- {tr.translation}</Bold>
              <Small><Italic> ({tr.grammar}) </Italic></Small>
            </Paragraph>
            <Examples exampleList={tr.examples} />
          </Fragment>
        )
      })
    )
  }
}

MeaningComponent.propTypes = {
  translations: PropTypes.array
}

export default MeaningComponent
