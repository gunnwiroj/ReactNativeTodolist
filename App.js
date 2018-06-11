import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Todo List</Text>
          <TextInput
            style ={{fontSize:30}}
            placeholder="Task..."
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});