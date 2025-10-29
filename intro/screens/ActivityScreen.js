import { useState } from 'react'
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'

export default function ActivityScreen() {

  const [loading, setLoading]= useState(false);
  
  const startLoading=()=>{
    setLoading(true);
    setTimeout(()=>setLoading(false), 3000);

  };

  if(loading){
    return(
    <View style={styles.container}>
      <View style={styles.loadercontainer}>
        <ActivityIndicator
        size='large'
        color="#4453b2ff"  
        animating={true}
        hidesWhenStopped={true}   
        >
        </ActivityIndicator>
        <Text style={styles.texto}>Cargando...</Text>
      </View>
    </View>
    );
  }
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ActivityIndicator</Text>
        <Button title='Carga de datos' onPress={startLoading} color={"#3056dff7"}>                   
        </Button>
      </View>
    )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000000ff',
  },
  texto:{
    color:'#fff',
  },
  title:{
    fontSize: 20,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
     fontWeight: 'bold',
     color: '#ffffffff',
  },
  loadercontainer:{
    alignItems:'center',
  },

})
