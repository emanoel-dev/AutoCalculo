import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class App extends Component {
    render() {
        return(
            <View style={styles.container}>

                <View style={styles.topo}>
                    <Image 
                        source={require('../../src/images/gas.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>{this.props.result < 0.7 ? "Compensa usar Alcool" : "Compensa usar Gasolina"}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={{color: '#FFF', fontSize: 28, fontWeight: 'bold'}}></Text>
                    <Text style={styles.produtos}>Álcool: R$ { this.props.alcool }</Text>
                    <Text style={styles.produtos}>Gasolina: R$ {this.props.gasolina} </Text>
                </View>
                <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao} onPress={this.props.Fechar}>Calcular novamente</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#220901',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topo: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 28,
        color: '#F6AA1C',
        fontWeight: 'bold',
        margin: 15
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200
    },
    produtos: {
        color: '#FFF',
        fontSize: 22,
    },
    botao: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#BC3908',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    textoBotao: {
        color: '#BC3908',
        fontSize: 18,
    },
})