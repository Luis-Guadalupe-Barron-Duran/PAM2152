import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useState, useRef, useMemo} from 'react';
import BottomSheet , {BottomSheetView, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function BotonesSheetScreen() {
  const bottomSheetRef1 = useRef(null);
  const bottomSheetRef2 = useRef(null)
  const snapPoints = useMemo(() => [1,'50%','75%'])
  const handleOpenSheet1 = () => {
        bottomSheetRef1.current?.expand();
    }
  const handleOpenSheet2 = () => {
        bottomSheetRef2.current?.expand();
    }

    return (
     <GestureHandlerRootView
     style={styles.rootView}
     >
      <View style={styles.container}>
        <View style={styles.productContainer}>
            <Text style={styles.titulo}>
                Tenis Nike Air Max
            </Text>
            <Image style={styles.imgTenis} source={{uri:'https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/default/1036316-0000V1.jpg'}}>
            </Image>
        </View>
        <TouchableOpacity
        onPress={handleOpenSheet1}
        style={styles.buttonVerInfo}
        >
            <Text style={styles.buttonText}>
              Ver Informacion
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={handleOpenSheet2}
        style={styles.buttonComprar}
        >
            <Text style={styles.buttonText}>
              Comprar
            </Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
      ref={bottomSheetRef1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={styles.BSheet}
      index={-1}
      backdropComponent={(props) =>
      (
        <BottomSheetBackdrop {...props}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior='close'
        ></BottomSheetBackdrop>
        )
      } 
      >
        <BottomSheetView style={styles.BView}>
          <Text style={styles.sheetTitle}>Informacion del Producto</Text>
          <Text style={styles.sheetText}>Marca: Nike</Text>
          <Text style={styles.sheetText}>Modelo: Air Max</Text>
          <Text style={styles.sheetText}>Descripción: Comodidad y estilo en cada paso con los Nike Air Max</Text>

          <TouchableOpacity style={styles.buttonCerrar} onPress={()=> bottomSheetRef1.current?.close()}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </BottomSheetView>

      </BottomSheet>

      <BottomSheet
      ref={bottomSheetRef2}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={styles.BSheet}
      index={-1}
      backdropComponent={(props) =>
      (
        <BottomSheetBackdrop {...props}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior='close'
        ></BottomSheetBackdrop>
        )
      } 
      >
        <BottomSheetView style={styles.BView}>
         <Text style={styles.sheetTitle}>Realizar Pago</Text>
         <Text style={styles.sheetText}>Total a pagar: $150</Text>
         <View>
              <TouchableOpacity style={styles.buttonPagar} onPress={()=> alert('Compra Realizada')}>
                  <Text style={styles.buttonText}>Pagar</Text>
              </TouchableOpacity>
               <TouchableOpacity style={styles.buttonCerrar} onPress={()=> bottomSheetRef2.current?.close()}>
                  <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
         </View>
        </BottomSheetView>

      </BottomSheet>
     </GestureHandlerRootView>
    )
  
}

const styles = StyleSheet.create({
   rootView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#b1a8778f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    productContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 200,
    },
    sheetTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sheetText: {
        fontSize: 16,
        marginBottom: 10,
    },
    BSheet: {
        backgroundColor: '#a5a88ece',
    },
    BView: {
        flex: 1,
        alignItems: 'center',
    },
    buttonVerInfo: {
        backgroundColor: '#a5a883ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonComprar: {
        backgroundColor: '#784e4eff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 200,
    },
    buttonPagar: {
        backgroundColor: '#4f4033ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonCerrar: {
        backgroundColor: '#313a34ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imgTenis: {
        flex: 1,
        resizeMode: 'contain',
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 20,
    },

})
