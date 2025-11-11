import { Text, StyleSheet, View, FlatList, SectionList, ScrollView} from 'react-native'
import React, {Component} from 'react'
export default function BotonesScreen() {
const datos=[{id: '1', nombre: 'manzana'},
  {id: '2', nombre: 'platano'},
  {id: '3', nombre: 'naranja'},
  {id: '4', nombre: 'uva'},
  {id: '5', nombre: 'fresa'},
  {id: '6', nombre: 'sandia'},
 ]

 const secciones=[
    {titulo: 'frutas',
      data:[
        {nombre:'manzana'},
        {nombre:'platano'},
        {nombre:'naranja'},
        {nombre:'uva'},
        
      ]
    },
    {
      titulo: 'verduras',
      data:[
        {nombre: 'zanahoria'},
        {nombre: 'lechuga'},
        {nombre: 'tomate'},
        {nombre: 'brocoli'}
      ]
    }
 ]
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.Titulo}>Ejemplo de FlatList</Text>
      <FlatList
      data={datos}
      keyExtractor={(item)=>item.id}
      renderItem={({item}) => (
        <View style={styles.elementos}>
        <Text style={styles.text}> {item.nombre} </Text>
        </View>
      )}
      scrollEnabled={false}
      ItemSeparatorComponent={()=><View style={styles.separador}></View>}

></FlatList>
      <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>
      <SectionList
      sections={secciones}
      keyExtractor={(item, index)=> item.nombre + index}
      renderItem={({item})=>(
        <View
        style={styles.itemSection}>
          <Text style={styles.textItem}>
            {item.nombre}
          </Text>
        </View>
      )}
      renderSectionHeader={({section:{titulo}})=>(
      <View style={styles.encabezado}>
        <Text style={styles.tituloSeccion}>{titulo}</Text>
      </View>
      )}
      scrollEnabled={false}
      stickySectionHeadersEnabled={false}
      ></SectionList>
      </View>

      </ScrollView>
      
    )
  
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#90ae59ff"
},
content:{
  padding:20,
  paddingBottom:40,
},
Titulo:{
  fontSize:30,
  fontWeight:'bold',
  marginBottom:20,
  marginTop:20,
  textAlign:'center',
  color:'#000000ff'
},
Titulo2:{
  fontSize:28,
  fontWeight:'bold',
  marginBottom:20,
  marginTop:30,
  textAlign:'center',
  color:'#ffffffff'
},
elementos:{
width:'100%',
justifyContent:'center',
alignItems:'center',
height:80,
backgroundColor:'#dfefe684',
marginVertical:5,
borderRadius:15,
shadowColor:'#000000ff',
shadowOffset:{
  width:0,
  height:3
},
shadowOpacity:0.9,
shadowRadius:4,
elevation:5
},
text:{
  fontSize:20,
  fontFamily:'Times New Roman',
  color:'#fff',
  fontWeight:'900',
  textDecorationLine:'underline'
},

separador:{
  height:10,
},
encabezado:{
  backgroundColor:'#d792e5a3',
  padding:15,
  borderRadius:12,
  marginTop:10,
  marginBottom:10,
  shadowColor:'#0a0a0aff',
  shadowOffset:{
    width:0,
    height:2,
  },
  shadowOpacity:0.5,
  shadowRadius:3.84,
  elevation:5,
},
tituloSeccion:{
  fontWeight:'bold',
  fontSize:22,
  color:'#0000',
  textAlign:'center',
  fontFamily:'Times New Roman'
},
itemSection:{
  height:30,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#dbdfdeff',
  borderRadius:10,
  marginVertical:5,
  borderRadius:10,
  marginLeft:5,
  shadowColor:'#000',
  shadowOffset:{
    width:0,
    height:2
  },
  shadowOpacity:0.5,
  shadowRadius:2,
  elevation:3
},
textItem:{
  fontSize:18,
  fontWeight:'700',
  color:'#000',
  fontFamily:'Times New Roman'
}

})
