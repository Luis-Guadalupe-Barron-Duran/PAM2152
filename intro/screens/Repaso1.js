import React, {use, useEffect, useState} from 'react';
import { Text, StyleSheet, View, ImageBackground, 
  Animated, Easing, TextInput, Switch, Button, Alert} from 'react-native'


  export default function ImageScreen() {
    //Swicth
      const [esEnsendido, cambiarEncendido]=useState(false)
       const [color, cambiarColor]=useState('White')
      


    //Nombre y gmail
      const [nombre, setNombre] = useState('');
      const [gmail, setGmail] = useState('');
    const correo= (gmail) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(gmail.trim());
    }
      const nombrev = (nombre) => {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; 
    return regex.test(nombre.trim()) && nombre.trim().length >= 3;
  }

    const mostrarAlerta= () => {

         if(nombre.trim() === '' && gmail.trim() === '' ){
          Alert.alert("Error: "+
            " Por favor complete todos los campos ");
          alert("Error"+
            " Por favor complete todos los campos ");
            return;
          } else if (!correo(gmail)) {

            Alert.alert("Error: "+
            " Por favor ingrese un gmail valido");
          alert("Error: "+
            " Por favor ingrese un gmail valido ");
            return;
          }
          else if (!nombrev(nombre)) {

            Alert.alert("Error: "+
            " Por favor ingrese un nombre valido (mobile)");
          alert("Error "+
            " Por favor ingrese un nombre valido (web)");
            return;
          }
         
          else {
            //alert en mobile
          Alert.alert("Reguistro exitoso :"+
             `Nombre: ${nombre}\n
             Gmail: ${gmail}\n
             `
            );
            //alert en web
             alert("Reguistro exitoso : \n"+`Nombre: ${nombre}\n Gmail: ${gmail}\n`
              
            );
            return;
         }
    
      }
      const mostrarAlerta2= () => {
         if(!esEnsendido ){
          Alert.alert("Terminos no aceptados "+
            'Debes de aceptar los terminos y condiciones');
          alert("Terminos no aceptados "+
            'Debes de aceptar los terminos y condiciones');
          } else {
           mostrarAlerta();
         }
    
      }
    //Estado para controlar la carga 
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
    <Animated.View color= ' #472f2fff' style={[styles.splashContainer, {opacity: desvanecido}]}>
     <ImageBackground
     color= ' #472f2fff'
        source={require('../assets/cargando.gif')}
        resizeMode='contain'
        style={styles.splashImage}
     >
      <Text style={styles.splashText}>Cargando...</Text>
      </ImageBackground> 
    </Animated.View>
  );

}

//Pantalla principal
    return (
      <ImageBackground   
      source={require('../assets/image2.jpg')}
        resizeMode='cover'
        style={styles.backgrounds} 
      >
        <View style={styles.elementos}>
      <Text style={styles.texto}>Reguistro de Usuario</Text>

      <Text style={styles.etiqueta}>Nombre: </Text>
       <TextInput style={styles.input}
                placeholder='Nombre completo'
                value={nombre}
                onChangeText={setNombre}
                ></TextInput>
       <Text style={styles.etiqueta}>Gmail: </Text>
       <TextInput style={styles.input}
                placeholder='Correo electronico'
                value={gmail}
                onChangeText={setGmail}
                ></TextInput>
       <View style={styles.container}>
       
              
               {/*Operador ternario
                 {condicional ? valorTrue: valorFalse}*/}
               <Text style={[styles.luz, {color: esEnsendido ? color:'black'}]}>
                 {esEnsendido ? 'Terminos aceptados': 'Aceptar Terminos y Condiciones'}
               </Text>
                 <Switch
                 value ={esEnsendido}
                 onValueChange={()=> cambiarEncendido(!esEnsendido)}              
                 trackColor={{true:'gray', false: 'black'}}
                 ></Switch>
                <Button
                            color='#000000ff'
                            title='Reguistrarse'
                            onPress={mostrarAlerta2} 
                          />    

        </View>
              
        </View>
       
      </ImageBackground>

      
    );
  
}
const styles = StyleSheet.create({

backgrounds: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  //color: '#6a8dded4',
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
  color: '#ff0909ff',
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
  fontFamily:'Times New Roman',
  fontWeight:'bold',
  marginBottom:20,
},

textoContainer: {

  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: 20,
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
elementos: {
    width: '80%',
    height: 400,
    backgroundColor: '#828a8353',
   justifyContent: 'center',
   alignItems: 'center',
    marginVertical: 10,
   borderRadius: 10,
  },

   input:{
    width:'50%',//ocupa el ancho disponible
    borderWidth:1,//grosor del borde
    borderColor:'#000000ff',//color del borde
    borderRadius:8,//para los redondeados
    padding:10,//espacio interno
    marginBottom:15,//
    backgroundColor:'#b3b3b38b',
  },
  etiqueta:{
    fontSize:20,
    color:'#ffffffff',
    marginBottom:5,
    marginTop:10,
  },
})

