import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import params from './params';
import MineField from './components/MineField';
import {createMineBoard} from './functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
    console.debug(createMineBoard);
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
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MineField style={styles.board} board={this.state.board} />
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
