import React, { useState, useRef, useEffect }from 'react'
import { View, StyleSheet, Text, Button, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer'

// random number function > guess number 
const randomNum = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randNum = Math.floor(Math.random() * (max - min)) + min
    if (randNum === exclude) {
        return randomNum(min, max, exclude)
    } else {
        return randNum
    }
}

const GameScreen = props => {
    const [rounds, setRounds] = useState(0)
    const [currentGuess, setCurrentGuess] = useState(randomNum(1, 100, props.userGuess))

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const { userGuess, gameOver } = props

    useEffect(() => {
        if(currentGuess === props.userGuess) {
            props.gameOver(rounds)
        }
    }, [ currentGuess, userGuess, gameOver ])

    const nextGuess = direction => {
        if((direction === 'lower' && currentGuess < props.userGuess) || (direction === 'greater' && currentGuess > props.userGuess)) {
            Alert.alert("Don't lie! Let's play a fair game.", '', [{text:'Sorry', style: 'cancel'}])
            return
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = randomNum(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currentRounds => currentRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Computer Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.guessContainer}>
            <Button  title="LOWER" onPress={nextGuess.bind(this, 'lower')} />
            <Button  title="HIGHER" onPress={nextGuess.bind(this, 'greater')}  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    guessContainer: {
        alignItems:'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'

    }
})

export default GameScreen
