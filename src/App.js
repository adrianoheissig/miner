import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Alert} from 'react-native';

import params from './params';
import MineField from './components/MineField';
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
} from './functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    };
  };

  openField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Pedeu!!! Que pena', 'tente novamente!!!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!!!');
    }

    this.setState({board, won, lost});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MineField
          style={styles.board}
          board={this.state.board}
          onOpenField={this.openField}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  board: {
    backgroundColor: '#AAA',
    alignItems: 'center',
  },
});
