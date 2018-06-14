import React, {Component} from 'react';
import {View,TextInput, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
export default class Taskadd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currenttask:'',
        }
        
    }
    
    render(){
        return(
            <View style={{ flexDirection:'row', justifyContent:'space-around',paddingRight:4}}>
                <TextInput style={styles.Input}
                    placeholder="Task"
                    placeholderTextColor='#555'
                    onChangeText={(text)=>this.setState({currenttask:text})}
                    
                />
                <Icon
                    name='plus-circle'
                    type='font-awesome'
                    onPress={()=> this.props.AddTask(this.state.currenttask)}  
                    size={27}
                    color='#21d102'
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    Input:{
        height: 40,
        width:300,
        paddingLeft:10,
        backgroundColor: '#d9dadb'
    }
});