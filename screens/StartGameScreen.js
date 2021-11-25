import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInput = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetNumber = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    // validating user selected number
    const confirmNumber = () => {
        const chosenNumber = parseInt(enteredValue)
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)  {
            Alert.alert('Invalid Number - Choose a number between 1 and 99.', '', [{ text: 'Ok', style: 'destructive', onPress: resetNumber }])
        return 
    }
        setEnteredValue('')
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss()
    }

    let confirmedOutput 

    if (confirmed) {
        confirmedOutput = 
        <View style={styles.userNumContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.startGame(selectedNumber)} />
        </View>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Text style={styles.subText}>Choose a number and see if the computer can guess your number</Text>

            <View style={styles.inputContainer}>
                <Text>Select a Number</Text> 
                <Input style={styles.input}
                blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2}
                onChangeText={numberInput}
                value={enteredValue} />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                    <Button color={Colors.accent} title="Reset" onPress={resetNumber} />
                    </View>
                    <View style={styles.btn}>
                    <Button color={Colors.primary}  title="Confirm" onPress={confirmNumber} />
                    </View>
                </View>
            </View>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    subText : {
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 5
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems:'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        marginTop: 20
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 13
    },
    btn: {
        width: 100,

    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    userNumContainer: {
        alignItems: 'center',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    }
})

export default StartGameScreen
