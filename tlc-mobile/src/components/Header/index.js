import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    Image 
} from 'react-native';

import Logo from './Logo';

export default class Header extends Component{
    render() {
        const headerRight = this.props.headerRight || null;
        let backBtn = null;

        if (this.props.showBackButton) {
            backBtn = <TouchableOpacity onPress={this.props.onBack}>
                <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>;
        }

        return (
            <View style={styles.viewStyle}>
                <View style={styles.leftContainer}>
                    {backBtn}
                </View>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.rightContainer}>
                  {headerRight}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backBtnText: {
        color: 'blue'
    },

    leftContainer: {
        flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 10
    },

    viewStyle: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: '#faf8ec',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    rightContainer: {
        flex: 1
    }
});
