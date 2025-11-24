import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detalles() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de usuario</Text>
        <Text>Usando NavigationStack</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
