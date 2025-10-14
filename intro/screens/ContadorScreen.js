//Zonas
//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import React, {useState} from 'react';
//2. Main:Zona de componentes
export default function App() {

 const [contador, setContador]=useState(0);//desestructuracion

  return (
    //todos los componentes van dentro de una vista
    <View style={styles.container}>
      <Text style={styles.texto}>Contador</Text> 
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="orange" title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button color="purple" title='Decrementar' onPress={()=>setContador(contador-1)}></Button>
      <Button color="orange" title='Reiniciar' onPress={()=>setContador(contador*0)}></Button>
      </View>

      <StatusBar style="auto" />
    </View>


  );
}

//3. Estilos: Zona de estilos y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fad88ab9',
    alignItems: 'center', //Eje horizontal
    justifyContent: 'center',   //Eje vertical
  }, //llave del objeto anterior(se separa con comas)
  //creamos mas objetos teniendo en cuenta la coma para separarlos
   texto:{

    fontFamily:'Times New Roman',
    fontSize:30,
    color:'#000000ff',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
    
  },
   texto2:{
    fontFamily:'Courier',
    fontSize:40,
    color:'#000000ff',
    fontWeight:'900',
    //fontStyle:'italic',
    textDecorationLine:'underline',
  },
  contenedorBotones:{
    marginTop:20,
    flexDirection:'row',
    gap:20, //separacion entre botones
    
  },


});
