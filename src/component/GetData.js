import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Clipboard,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
    button: {
        flex:1,
        backgroundColor: '#008000',
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '300',
    }
});



export default class GetData extends Component <{}> {
    _onPress = async () => {
        console.log('aaa',this.text);
        console.log(await Clipboard.getString());
        const cbText = await Clipboard.getString();
        this.setState({
            text: cbText,
        })
        console.log('this.text=',this.text);      
    }
    state= {
        text:'でふぉ',
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this._onPress}>
                </TouchableOpacity>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}