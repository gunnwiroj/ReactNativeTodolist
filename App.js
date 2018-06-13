import React from 'react';
import { StyleSheet, Text, View, TextInput ,Alert } from 'react-native';
import Taskadd from './ component/Taskadd';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      AllTask:[],
    }
    this.AddTask = this.AddTask.bind(this)
  }

  AddTask(task){
    let newtask = this.state.AllTask.slice();
    newtask = newtask.concat(task);
    this.setState({
      AllTask:newtask
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Todo List</Text>
          <Taskadd AddTask={this.AddTask}/>
          <Text>{this.state.AllTask}</Text>
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
