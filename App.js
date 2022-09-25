import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  Modal,
  Keyboard, 
  TextInput,
  StyleSheet,
  TouchableOpacity, 
  KeyboardAvoidingView
} from 'react-native';

import Resultado from './src/components/Resultado.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        alcool: '',
        gasolina: '',
        alcoolCalc: '',
        result: '',
        statusModal: false,
      };
      this.Calcular = this.Calcular.bind(this);
      this.Fechar = this.Fechar.bind(this);
}

Calcular() {
    Keyboard.dismiss();
    if (this.state.alcool && this.state.gasolina >= 1 ) {

      this.setState({statusModal : true});
      const convertAlcool = parseFloat(this.state.alcool);
      const convertGasolina = parseFloat(this.state.gasolina);

      const calcula = convertAlcool / convertGasolina;

      this.state.result = calcula.toFixed(2);

      this.state.alcool = convertAlcool.toFixed(2);
      this.state.gasolina = convertGasolina.toFixed(2);
  } else {
    alert("Preencha todos os campos!");
  }
}

Fechar(visible){
  this.setState({statusModal : visible});

}
  render() {
    return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} // KeyboardAvoidingView faz orietação do teclado aberto em relacao ao sistema operacional iOS/Android
      style={styles.container}>

        <View style={{width: '100%', height: 280, alignItems: 'center',justifyContent: 'center'}}>
          <Image style={styles.logo} source={require('./src/images/logo.png')} />
          <Text style={styles.titulo}>Qual a melhor opção?</Text>
        </View>
          <View style={styles.entrada}>
            <Text style={styles.subTitulo}>Álcool: Preço por Litro</Text>
            <View style={styles.input}>
              <TextInput 
                onChangeText={(value) => this.setState({alcool: value})}
                keyboardType='numeric' 
                style={{backgroundColor: '#FFF', width: 350, height: 50, borderRadius: 5, fontSize: 18, padding: 5, marginBottom: 20}}>
              </TextInput>
            </View>

            <Text style={styles.subTitulo}>Gasolina: Preço por Litro</Text>
            <View style={styles.input}> 
              <TextInput 
                onChangeText={(value) => this.setState({gasolina: value})}
                keyboardType='numeric' 
                style={{backgroundColor: '#FFF', width: 350, height: 50, borderRadius: 5, fontSize: 18, padding: 5,}}>
              </TextInput>
              <TouchableOpacity style={styles.botao}>
                <Text style={{color: '#FFF', fontSize: 28, fontWeight: 'bold'}} onPress={this.Calcular}>Calcular</Text>
              </TouchableOpacity>
              <Modal 
                animationType='slide'
                visible={this.state.statusModal}>

                <View style={{width: '100%', height: '100%'}}>
                  <Resultado 
                    Fechar = { () => this.Fechar(false) }
                    alcool = {this.state.alcool}
                    gasolina = {this.state.gasolina}
                    result = {this.state.result}
                  />
                </View>
              </Modal>
            </View>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220901',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20
  },
  subTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 35
  },
  input: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  entrada: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
  },
  botao: {
    width: 350,
    height: 50,
    backgroundColor: '#BC3908',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
});
