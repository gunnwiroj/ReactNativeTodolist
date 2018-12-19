import React from 'react';
import { StyleSheet, View, TextInput ,Alert } from 'react-native';
import { Text, Header} from 'react-native-elements';
import Taskadd from './ component/Taskadd';
import TaskList from './ component/Tasklist';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      AllTask:[],
    }
  }
  
  AddTask = (task) => {
    if(task!=null){
      let newtask = this.state.AllTask.slice();
      newtask = newtask.concat(task);
      this.setState({
        AllTask:newtask
      });
    }
  }

  RemoveTask = (id) => {
    let newtask = this.state.AllTask.slice();
    {/* "slice" = deconstruct array in to pieces */}
    newtask.splice(id,1);
    {/* "splice" = delete data at index = id // (,1) = delete length = 1
      eg. ["a","b","c"] => splice(id=1,1) => ["a",c"] // splice(id=1,2) => ["a"] 
    */}
    this.setState({
      AllTask :newtask
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{text:'Native Todo' ,style:{color:'white',fontWeight:'bold',fontSize:16}}}
        />
          <View style={{marginTop:15, marginLeft:10}}>
            <Taskadd AddTask={this.AddTask}/>
            <TaskList Task={this.state.AllTask} RemoveTask={this.RemoveTask}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  
});
