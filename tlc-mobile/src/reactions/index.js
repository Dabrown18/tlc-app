import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Icon from './Icon';

const image = require('./images/like.png');
const { array } = PropTypes;

class Reactions extends Component {

  static propTypes = {
    icons: array,
  };

  static defaultProps = {
    icons: [
      'like', 'heart', 'angry', 'laughing', 'surprised',
    ],
  };

  state = {
    show: false,
    selected: '',
  };

  onSelectReaction = (reaction) => {
    this.setState({
      selected: reaction,
    });
    this.toggleReactions();
  }

  toggleReactions = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  renderReactions() {
    const { icons } = this.props;
    if (this.state.show) {
      return (
        <View style={styles.reactions}>
        { icons.map((name, index) => (
            <Icon
              key={index}
              name={name}
              delay={index * 100}
              index={index}
              onPress={this.onSelectReaction}
            />
          ))
        }
        </View>
      );
    }
  }

  render() {
    const { style } = this.props;
    const { selected } = this.state;

    const selectedComponent = selected ? <Text>{selected}</Text> : null;

    return (
      <View style={[style, styles.container]}>
        <TouchableOpacity onPress={this.toggleReactions}>
          <Image source={image} style={styles.icon} />
        </TouchableOpacity>
        {selectedComponent}
        {this.renderReactions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  icon: {
    width: 30,
    height: 30,
  },
  reactions: {
    flexDirection: 'row',
    height: 0,
  },
});

export default Reactions;
