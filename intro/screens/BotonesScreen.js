import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React, {useState} from 'react';

export default function BotonesScreen() {

  const [esEnsendido, cambiarEncendido]=useState(false)
  const [color, cambiarColor]=useState('yellow')

    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>Control de Luz</Text>
        {/*Operador ternario
          {condicional ? valorTrue: valorFalse}*/}
        <Text style={[styles.luz, {color: esEnsendido ? color:'black'}]}>
          {esEnsendido ? 'Luz Encendida': 'Luz Apagada'}
        </Text>
          <Switch
          value ={esEnsendido}
          onValueChange={()=> cambiarEncendido(!esEnsendido)}              
          trackColor={{true:'yellow', false: 'black'}}
          ></Switch>
        <View style={styles.cajaBotones}>
          <Button
          title='Amarillo'
          onPress={()=>esEnsendido && cambiarColor('yellow')
          
          }
          color='rgba(239, 213, 68, 1)'
          ></Button>
          <Button
          title='Azul'
          onPress={()=>esEnsendido && cambiarColor('blue')}
          color='rgba(155, 198, 255, 1)'
          ></Button>
          <Button
          title='Rojo'
          onPress={()=>esEnsendido && cambiarColor('red')}
          color='rgba(255, 79, 79, 1)'
          ></Button>
        </View>

      </View>
    ) 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b6a41b9',
    alignItems: 'center', //Eje horizontal
    justifyContent: 'center',   //Eje vertical
  },
  cajaBotones:{
    flexDirection:'row',
    gap:10, 
    marginTop:20,
  },
  titulo:{
    fontSize:30,
    color: 'white',
    marginBottom:20,
    fontWeight:'bold',
  },
  luz:{
    fontSize:30,
    marginBottom:15,
  },

})