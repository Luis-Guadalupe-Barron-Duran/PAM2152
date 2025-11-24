
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import Detalles from './Detalles';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detalles"
        component={Detalles}
        options={{
          title: "Detalles del usuario",
          tabBarStyle: { display: 'none' }
        }}
      />
    </Stack.Navigator>
  );
}
