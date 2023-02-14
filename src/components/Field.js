import React from 'react';

import {StyleSheet, View} from 'react-native';

import params from '../params';

export default props => {
  const styleField = [styles.field];

  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  return <View style={styleField} />;
};

const styles = StyleSheet.create({
  field: {
    width: params.blockSize,
    height: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
});
