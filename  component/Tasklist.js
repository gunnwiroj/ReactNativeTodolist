import React from 'react';
import { View, Text} from 'react-native';
import { Icon, } from 'react-native-elements';
export default class Tasklist extends React.Component{
    render(){
        return(
            <View>
                {/* what's props? => props data or object which parent (App.js) sent to Childen Node or sent from childen to parent
                    !!!"props only sent between child and parent"!!! 
                */}
                {this.props.Task.map((AllTask, id)=>
                    {return(
                        <View key={id} style={{flexDirection:'row',paddingTop:15,marginLeft:15,paddingRight:15, justifyContent:'space-between'}}>
                        <Text style={{fontSize:18}}>
                            {id+1}. {AllTask}
                        </Text>
                        <Icon 
                            name= 'times-circle'
                            type='font-awesome'
                            onPress ={()=>this.props.RemoveTask(id)}
                            color='#d10135'
                        />
                        </View>
                    )}
                )}
            </View>
        )
    }
}