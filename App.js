import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRound, setGuessRound] = useState(0)

  const gameOver = numOfRounds => {
    setGuessRound(numOfRounds)
  }

  const newGame = () =>  {
    setGuessRound(0)
    setUserNumber(null)
  }

  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRound(0)
  }

  let content = <StartGameScreen startGame={startGame} />
  if (userNumber && guessRound <= 0) {
    content = <GameScreen userGuess={userNumber} gameOver={gameOver} />
  } else if (guessRound >  0) {
    content = <GameOverScreen numRounds={guessRound} userNumber={userNumber} newGame={newGame}  />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess The Number Game' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
