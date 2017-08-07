import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Image 
} from 'react-native';

import Logo from './Logo';

export default class Header extends Component{
    render() {
        return (
            <View style={styles.viewStyle}>
                <Logo />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: '#faf8ec',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    }
});
