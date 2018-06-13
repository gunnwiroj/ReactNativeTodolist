import React from 'react';
import { View, Text, Button } from 'react-native';
export default class Tasklist extends React.Component{
    render(){
        return(
            <View>
                {this.props.Task.map((AllTask, id)=>
                    {return(
                        <View key={id}>
                        <Text>
                            {id}  {AllTask}
                        </Text>
                        <Button
                            title= "remove"
                            onPress ={()=>this.props.RemoveTask(id)}
                        />
                        </View>
                    )}
                )}
            </View>
        )
    }
}