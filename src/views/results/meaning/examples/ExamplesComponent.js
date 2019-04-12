import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import ViewMoreText from 'react-native-view-more-text';
import { Text, View } from 'react-native'
import { Small } from 'ui'
import { get, map } from 'lodash'
import { box } from 'styles';

class ExamplesComponent extends Component {

  renderViewMore(onPress){
    return(
      <Text onPress={onPress}>View more</Text>
    )
  }

  renderViewLess(onPress){
    return(
      <Text onPress={onPress}>View less</Text>
    )
  }


  render(){
    return(
      <ViewMoreText
        numberOfLines={1}
        renderViewMore={this.renderViewMore}
        renderViewLess={this.renderViewLess}
        textStyle={[box.examplesComponent, box.leftPadded]}
      >{
        map(this.props.exampleList, (ex, k) => {
          const text = `${ex.translate.join(", ")} (${ex.text})${k > 0 ? "\n" : ""}`
          return (<Small key={k}>{text}</Small>)
        })
      }</ViewMoreText>
    )
  }
}

ExamplesComponent.propTypes = {
  exampleList: PropTypes.array
}

export default ExamplesComponent
