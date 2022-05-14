import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
            },
            texto:{
                color:'#0F0',
                fontSize: 24,
                fontWeight: 'bold',
            },
            caixa:{
                backgroundColor: 'white',
                padding: 8,
                margin: 8,
                textAlign: 'center',
                borderRadius: 8,
                elevation: 8,
                minWidth: '80%',
            },
            botaoImagem:{
                width: 48,
                height: 48,
                margin: 8,
                borderRadius: 8,
                elevation: 8,
                alignSelf:"center",
            }
        })

export default estilo;
