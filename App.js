import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import estilo from "./Estilo";
import zoeira from "./assets/gratisography-10-free-stock-photo-800x525.jpg";

const App = (props) => {
  const[estado, setEstado] = useState('Texto Aleatorio');

  const mensagem = () =>{
    alert(estado)
  }

  useEffect(() =>{
    mensagem()
  }, [estado]);

  return (
    <View style={estilo.container}>
      <Text style={estilo.texto}>hola!</Text>
      <TextInput
        style={estilo.caixa}
      />
      <Button title="click here" />
      <TouchableOpacity onPress={(value) => {
          setEstado(value);
        }}>
        <Text> Trazer imagem aqui</Text>
        <Image
          source={zoeira}
          alt="Imagem da zoeira"
          style={estilo.botaoImagem}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
