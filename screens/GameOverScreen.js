import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.gameOverContainer}>
            <Text style={styles.title}>Game Over!</Text>
            <Text style={styles.subText}>Number of Rounds: {props.numRounds}</Text>
            <Text style={styles.subText}>Your Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.newGame} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      gameOverContainer: {
          alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 30,
        borderRadius: 10,
      },
      title: {
        fontSize: 20,
        marginVertical: 10
    },
    subText: {
        marginTop: 10,
        marginBottom: 10
    }
})

export default GameOverScreen
