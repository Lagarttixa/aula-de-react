import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState} from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Button, Alert } from "react-native"; 

export default function App (){
  const [ cep, alterarCep ] = React.useState("00000-000");
  const [ logadouro, alterarLogagouro ] = React.useState("");
  const [ complemento, alterarComplemento ] = React.useState("");
  const [ bairro, alterarBairro ] = React.useState("");
  const [ localidade, alterarLocalidade ] = React.useState("");
  const [ uf, alterarUf ] = React.useState("");
  const [ ibge, alterarIbge ] = React.useState("");
  const [ gia, alterarGia ] = React.useState("");
  const [ ddd, alterarDDD ] = React.useState("");
  const [ siafi, alterarSiafi ] = React.useState("");

  const [ isLoading, setLoading ] = React.useState(false);

  const buscarEndereco = async () => {
    try{
      const response = await fetch ('https://viacep.com.br/ws/' + cep.toString().replace("-","") + '/json/');
      const json = await response.json();
      alterarLogagouro(json.logadouro);
      alterarComplemento(json.complemento);
      alterarBairro(json.bairro);
      alterarLocalidade(json.localidade);
      alterarUf(json.uf);
      alterarIbge(json.ibge);
      alterarGia(json.gia);
      alterarDDD(json.ddd);
      alterarSiafi(json.siafi);
    } catch (error){
      Alert.alert(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarEndereco();
  }, []);
  
  return (
    <ScrollView>
      <SafeAreaView style = {style.conteiner}>
        <View>
          <Text style = { StyleSheet.texto }>
            Entre com o CEP para pesquisar: 00000-000
          </Text>
          <TextInput 
            style = { StyleSheet.input }
            onChangeText = { alterarCep }
            value = { cep }
            keyboardType = "numeric"
            maxLength = {9}
            onFocus = {()=>alterarCep("")}
          />
          {isLoading ? <ActivityIndicator/> :
          <Button style = { style.botao }
            onPress = {() => {
              setLoading(true);
              buscarEndereco();
            }
          }
            title = "Consumindo ViaCEP API"
            color = "#841584"
            accessibilityLabel="Aprenda mais sobre consumo de API REST"
          />}
          <TextInput
            style = {style.inputLange}
            onChangeText = {alterarLogadouro}
            value = {logadouro}
            keyboardType = "default"
            hintText = {"Logadouro"}
            multiline = {true}
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarComplemento}
            value = {complemento}
            keyboardType = "default"
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarBairro}
            value = {bairro}
            keyboardType = "default"
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarLocalidade}
            value = {localidade}
            keyboardType = "default"
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarUf}
            value = {uf}
            keyboardType = "default"
            maxLength={2}
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarIbge}
            value = {ibge}
            keyboardType = "numeric"
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarGia}
            value = {gia}
            keyboardType = "numeric"
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarDDD}
            value = {ddd}
            keyboardType = "numeric"
          />
          <TextInput
            style = {style.input}
            onChangeText = {alterarSiafi}
            value = {siafi}
            keyboardType = "numeric"
          />
          <StatusBar style = "auto"/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );

}