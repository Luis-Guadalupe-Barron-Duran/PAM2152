import React, {use, useEffect, useState} from 'react';
import { Text, StyleSheet, View, ImageBackground, 
  Animated, Easing} from 'react-native'



export default function ImageScreen() {


  const [cargando, setCargando] = useState (true);
  const desvanecido = new Animated.Value(1);

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


if (cargando) {
  return (
    <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
     <ImageBackground
        source={require('../assets/image3.jpg')}
        resizeMode='contain'
        style={styles.splashImage}
     >
      <Text style={styles.splashText}>Cargando...</Text>
      </ImageBackground> 
    </Animated.View>
  );

}
    return (
      <ImageBackground
      
      source={require('../assets/gato.jpeg')}
        resizeMode='cover'
        style={styles.backgrounds} 
      >

        <View style={styles.textoContainer}>
      <Text style={styles.texto}>Hola bienvenido</Text>
        </View>
        
      </ImageBackground>
      
        
     
     /* <View>
        <Text>

        </Text>
      </View>*/
    );
  
}

const styles = StyleSheet.create({

backgrounds: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
},

texto: {

  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',

},

splashContainer: { 

  flex: 1,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
},

splashImage:
{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

},

splashText: {
  position: 'absolute',
  marginTop: 60,
  fontSize: 20,
  color: '#000',
},

textoContainer: {

  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: 20,
},


})