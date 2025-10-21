import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
export default function BotonesScreen() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');

  const mostrarAlerta= () => {
     if(nombre.trim() === '' ||password.trim() === '' || telefono.trim() === ''){
      Alert.alert("Error favor complete todos los campos (mobile)");
      alert("Error favor complete todos los campos (web)");
      } else {
        //alert en mobile
      Alert.alert("Datos ingresados"+
         `Nombre: ${nombre}\n
         Password: ${password}\n
         Telefono: ${telefono}`
        );
        //alert en web
         alert("Datos ingresados: \n"+`Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
        );
     }

  }
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextInput & Alert</Text>
        <Text style={styles.etiqueta}>Nombre: </Text>
        <TextInput style={styles.input}
          placeholder='Escribe tu nombre aqui'
          value={nombre}
          onChangeText={setNombre}
          ></TextInput>

          <Text Text style={styles.etiqueta}>Contraseña: </Text>
        <TextInput style={styles.input}
          placeholder='Escribe tu password aqui'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          ></TextInput>

          <Text Text style={styles.etiqueta}>Telefono: </Text>
        <TextInput style={styles.input}
          placeholder='Escribe tu telefono aqui'
          keyboardType='phone-pad'
          value={telefono}
          onChangeText={setTelefono}
          ></TextInput>

          <Button
            color='#000000ff'
            title='Mostrar datos'
            onPress={mostrarAlerta}
          
          />



         
      </View>
    )
  
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#85a8edff',
    alignItems:'center',
    justifyContent:'center',
    
  },

  titulo:{
    fontFamily:'Times New Roman',
    fontSize:30,
    color:'#000000',
    fontWeight:'bold',
   // fontStyle:'italic',
   textDecorationLine:'underline',
   marginBottom:20,
  },

  etiqueta:{
    fontSize:20,
   // color:'#000000',
    marginBottom:5,
    marginTop:10,
  },

  input:{
    width:'50%',//ocupa el ancho disponible
    borderWidth:1,//grosor del borde
    borderColor:'#000000ff',//color del borde
    borderRadius:8,//para los redondeados
    padding:10,//espacio interno
    marginBottom:15,//
    backgroundColor:'#b3b3b3ff',
  },

})