import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { StyleSheet, Text, View, ImageBackground, Animated, Easing, Switch, Button } from 'react-native';
import { ScrollView } from 'react-native-web';

/*
const[cargando,setCargando]=useState(true);
const desvanecido =new Animated.Value(1);

useEffect(()=>{
      const timer= setTimeout(()=>{
          Animated.timing(desvanecido,{
            toValue: 0,
            duration: 800,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }).start(()=> setCargando(false));
      }, 2000);
      return () => clearTimeout(timer);
  }, []);

  //
 if (cargando) {
  return (
    <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
     <ImageBackground
        source={require('./assets/cargando.gif')}
        resizeMode='contain'
        style={styles.splashImage}
     >
      <Text style={styles.splashText}>Cargando...</Text>
      </ImageBackground> 
    </Animated.View>
  );

}
*/
export default function App() {

  return (
    
    <ImageBackground
    style={styles.fondo}

    source={require('./assets/fondo1.jpg')}>
      <View style={styles.elementos}>
      <Text style={styles.Titulo}>Mis Deberes</Text>
       <Text style={styles.Titulo2}>07/11/2025</Text>
      </View>
      <ScrollView>
        <View style={styles.elementos2}>

    <Text style={styles.Titulo}>Trabajo</Text>
      </View>
      <View style={styles.elementos3}>

    <Text style={styles.Titulo}>Escuela</Text>
      </View>

      <View style={styles.elementos4}>

    <Text style={styles.Titulo}>Casa</Text>
      </View>
      </ScrollView>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
Titulo:{
fontSize:27,
fontWeight:'bold',

},
Titulo2:{
fontSize:20,
fontWeight:'bold',
color:'#fff'
},
  fondo:{

    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    },

  elementos:{
    margin:10,
    backgroundColor:'#d6ca7aff',
    width:'100%',
    height:100,
    alignItems:'center'

  },
  elementos2:{
    margin:10,
    alignItems:'center',
    backgroundColor:'#8bbae3b1',
    width:600,
    height:200

  },
    elementos3:{
    margin:10,
    alignItems:'center',
    backgroundColor:'#8be39b77',
    width:600,
    height:200

  },
    elementos4:{
    margin:10,
    alignItems:'center',
    backgroundColor:'#e3ba8b8b',
    width:600,
    height:200

  },
  
});
