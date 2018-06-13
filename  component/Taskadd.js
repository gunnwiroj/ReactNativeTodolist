import React, {Component} from 'react';
import {View,TextInput, Text, Button,Alert} from 'react-native';

export default class Taskadd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currenttask:'',
        }
    }
    
    render(){
        return(
            <View>
            <TextInput
                placeholder="Your Task ..."
                onChangeText={(text)=>this.setState({currenttask:text})}
            />
            <Button
                title="Add Task"
                onPress={()=> this.props.AddTask(this.state.currenttask)}
            />
            </View>
        )
    }
}