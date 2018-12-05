import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Clipboard,
    ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        backgroundColor: '#008000',
        alignItems: 'center',
        height: 25,
        margin: 3,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,        
    },
    outText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
    },
});



export default class Index extends Component <{}> {
  state= {
    text:'ここにクリップボードの中身が表示されます',
  };

  _onPress = async () => {
    console.log(await Clipboard.getString());
    const cbText = await Clipboard.getString();
    const cbTextFail = 'クリップボードが空です。何かコピーしてください';
    if(cbText == ''){
        this.setState({
            text: cbTextFail,
        })
    } else {
        this.setState({
            text: cbText,
        })
    }
    console.log('this.text=', this.text);
  };

  _onClear = async () => {
    await Clipboard.setString('');
    const cbText = 'クリップボードの中身をクリアしました'
    this.setState({
        text: cbText,
    })
    console.log('clearedText=', this.text);
  }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={this._onPress}>
                            <Text style={styles.buttonText}>クリップボードの中身表示</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={this._onClear}>
                            <Text style={styles.buttonText}>クリップボードクリア</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.outText}>{this.state.text}</Text>
                </View>
            </ScrollView>
        );
    }
}
