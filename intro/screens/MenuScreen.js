import { Text, StyleSheet, View} from 'react-native'
import React, { Component, useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextScreen from './TextScreen'
import ImageScreen from './ImageScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActityScreen from './ActivityScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomSheetScreen from './BottomSheetScreen'
import { Button } from 'react-native-web';

export default function MenuScreen () {

  const [screen, setScreen]=useState('menu');

  switch(screen){
     case 'contador':
        return <ContadorScreen/>
     case 'botones':
        return <BotonesScreen/>
     case 'texto':
        return <TextScreen/>
     case 'image':
        return <ImageScreen/>
     case 'scroll':
        return <ScrollViewScreen/>
     case 'activity':
        return <ActityScreen/>
     case 'flatlist':
        return <FlatListScreen/>
     case 'modal':
        return <ModalScreen/>
     case 'bottomsheet':
        return <BottomSheetScreen/>
     case 'menu':
        default:
             return (
                <View style={styles.container}>
                
                <Text style={styles.texto2}>Menu de Practicas</Text>
                <View style={styles.contenedorBotones}>
                <Button color="orange" onPress={()=>setScreen('contador') } title='Practica: Contador'/>
                <Button color="orange" onPress={()=>setScreen('botones') } title='Practica: Botones'/>
                <Button color="orange" onPress={()=>setScreen('texto') } title='Practica: Text Input & Alert '/>
                <Button color="orange" onPress={()=>setScreen('image') } title='Practica: ImageBackgroung & SlapshScreen '/>
                <Button color="orange" onPress={()=>setScreen('scroll') } title='Practica: ScrollView'/>
                <Button color="orange" onPress={()=>setScreen('activity') } title='Practica: ActivityIndicator'/>
                <Button color="orange" onPress={()=>setScreen('modal') } title='Practica: FlatList y Section List'/>
                <Button color="orange" onPress={()=>setScreen('flatlist') } title='Practica: Modal'/>
                <Button color="orange" onPress={()=>setScreen('bottomsheet') } title='Practica: BottomSheet'/>
                </View>
                </View>
             )   
  }

   

}

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
    flexDirection:'column',
    gap:20, //separacion entre botones
    
  },


});