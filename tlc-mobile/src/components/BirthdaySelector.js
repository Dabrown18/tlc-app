import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class BirthdaySelector extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  onChange = (date) => {
    this.setState({ date });
    this.props.onChange(date);
  };

  render() {
    return (
      <DatePicker
        {...this.props}
        style={{backgroundColor: '#fff', width: 300 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1901-01-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={this.onChange}
      />
    )
  }
}