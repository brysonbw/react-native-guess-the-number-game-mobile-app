import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
header: {
    width: '100%',
    height: '13%',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
},
headerTitle: {
    color: 'white',
    fontSize: 18
}
});

export default Header
