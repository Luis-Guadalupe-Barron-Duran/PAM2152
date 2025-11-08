import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { StyleSheet, Text, View, ImageBackground, Animated, Easing, Switch, Button } from 'react-native';
import { ScrollView } from 'react-native';



export default function App() {
const[completada,cambiarCom]=useState(false);
const[completada2,cambiarCom2]=useState(false);
const[completada3,cambiarCom3]=useState(false);
const[completada4,cambiarCom4]=useState(false);
const[completada5,cambiarCom5]=useState(false);
const[completada6,cambiarCom6]=useState(false);
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
    <View style={styles.tareas}>
    <Text>Tarea 1: Configurar una nueva Red</Text>
    <Text>Prioridad: Alta</Text>
     <Text>Estatus: </Text>
     <Text>{completada ? 'Completada':'Pendiente'}</Text>
     <Switch value={completada} onValueChange={()=>cambiarCom(!completada)}></Switch>
     
    <Text>Tarea 2: Configurar una nueva Red</Text>
    <Text>Prioridad: Alta</Text>
     <Text>Estatus: </Text>
     <Text>{completada2 ? 'Completada':'Pendiente'}</Text>
     <Switch value={completada2} onValueChange={()=>cambiarCom2(!completada2)}></Switch>
     </View>
      </View>
      <View style={styles.elementos3}>

    <Text style={styles.Titulo}>Escuela</Text>
    <View style={styles.tareas}>
    <Text>Tarea 1: Crear la presentacion para Aplicaciones Moviles</Text>
    <Text>Prioridad: Alta</Text>
     <Text>Estatus: </Text>
     <Text>{completada3 ? 'Completada':'Pendiente'}</Text>
     <Switch value={completada3} onValueChange={()=>cambiarCom3(!completada3)}></Switch>
     
    <Text>Tarea 2: Terminar los ejercicios de calculo</Text>
    <Text>Prioridad: Baja</Text>
     <Text>Estatus: </Text>
     <Text>{completada4 ? 'Completada':'Pendiente'}</Text>
     <Switch value={completada4} onValueChange={()=>cambiarCom4(!completada4)}></Switch>
     </View>
      </View>

      <View style={styles.elementos4}>

    <Text style={styles.Titulo}>Casa</Text>
    <View style={styles.tareas}>
    <Text>Tarea 1: Alimentar a los perros</Text>
    <Text>Prioridad: Alta</Text>
     <Text>Estatus: </Text>
     <Text>{completada5 ? 'Completada':'Pendiente'}</Text>
     <Switch value={completada5} onValueChange={()=>cambiarCom5(!completada5)}></Switch>
     
    <Text>Tarea 2: Hacer la limpieza</Text>
    <Text>Prioridad: Alta</Text>
     <Text>Estatus: </Text>
     <Text>{completada6 ? 'Completada':'Pendiente'}</Text>
     <Switch value={completada6} onValueChange={()=>cambiarCom6(!completada6)}></Switch>
     </View>
      </View>
      <Button onPress={()=>setCargando(cambiarCom6(!completada6) )(cambiarCom4(!completada4) )(cambiarCom3(!completada3) )(cambiarCom2(!completada2) )(cambiarCom(!completada) )}  title='Reiniciar'></Button>
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
tareas:{
  justifyContent:'space-between',
  margin:10
},
splashText:{
  alignItems:'center',
  fontSize:20,
  fontWeight:'bold'
},
splashContainer:{
  alignContent:'center',
  alignItems:'center'
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
    margin:5,
   padding:5,
    alignItems:'center',
    backgroundColor:'#8bbae3b1',
    width:600,
   
    height:300

  },
    elementos3:{
    margin:10,
    alignItems:'center',
    backgroundColor:'#8be39b77',
    width:600,
    height:300

  },
    elementos4:{
    margin:10,
    alignItems:'center',
    backgroundColor:'#e3ba8b8b',
    width:600,
    height:300

  },
  
});
