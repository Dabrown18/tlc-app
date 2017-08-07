import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text
} from 'react-native';
import AppText from './AppText';
import * as globalStyles from './styles/global';

const AgeSex = ({ style, children }) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);

AgeSex.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  ageText: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: 'rgba(137, 178, 224, 0.8)'
  }
});

export default AgeSex;
