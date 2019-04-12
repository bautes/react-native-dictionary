import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { Picker } from 'react-native';
import { getLanguagesList } from 'services/translateService'
import { map, get } from 'lodash'

class LanguageListComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      language: get(this.props, 'value', '')
    }
  }

  onChange(itemValue){
    this.setState({language: itemValue})
    this.props.onChange(itemValue)
  }

  render() {
    return (
      <Picker
        selectedValue={this.props.value || this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={value => this.onChange(value)}>{
          map(this.props.languagesList, ([lang, key]) => (<Picker.Item key={key} label={lang} value={key} />))
        }
      </Picker>
    )
  }
}

export default LanguageListComponent
