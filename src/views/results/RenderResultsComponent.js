import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import get from 'lodash/get'
import { Meaning } from './meaning/'

class RenderResultsComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.results.map((res, index) => (<View key={index}>
        <Meaning key={index} translations={get(res, 'translations', [])} />
      </View>)
      )
    )
  }
}
RenderResultsComponent.propTypes = {
  results: PropTypes.array
}

export default RenderResultsComponent
