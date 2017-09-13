import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

/**
A dualPicker for a passed option properties array
Each option is an object
symbol key represents how the button looks
title key represents the paired title
// the default selected option will be the first option
**/

export default class DualPicker extends Component {

  state = {selected: 'Male', clicked: false}

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setState({selected: this.props.options[0].title})
  }

  handleClick(title) {
    console.log('handling a click')
    this.setState({selected: title, clicked: true});
    this.props.onChange(title);
  }

  renderOption(symbol, title) {
    return (
      <TouchableOpacity
        style={styles.PickerOption}
        onPress={() => this.handleClick(title)}
      >
        <Text style={styles.PickerText}>{symbol}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    let options = this.props.options;
    return (
      <View style={styles.Picker}>
        {this.renderOption(options[0].symbol, options[0].title)}
        <View style={styles.PickerBox}>
          <Text
            style={
              this.state.clicked ?
              styles.PickerSelected :
              styles.PickerText
            }
          >
            {this.state.selected}
          </Text>
        </View>
        {this.renderOption(options[1].symbol, options[1].title)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Picker: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8
  },
  PickerOption: {
    flex: 1
  },
  PickerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PickerText: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center'
  },
  PickerSelected: {
    fontSize: 16,
    textAlign: 'center',
    color: '#89b2e0'
  }
});
