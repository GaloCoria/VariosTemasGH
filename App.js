import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import Clima from "./screens/Clima"
import Contactos from "./screens/Contactos"
import Accelerometer from "./screens/Accelerometer"
import Camerafondo from "./screens/Camerafondo"
import ImagePicker from "./screens/ImagePicker"
import NumeroEmergencia from "./screens/NumeroEmergencia"
import Principal from "./screens/Principal"
import QR from "./screens/QR"
import Videoplay from "./screens/Videoplay"
const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Principal"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Clima" component={Clima} />
          <Stack.Screen name="Contactos" component={Contactos} />
          <Stack.Screen name="Accelerometer" component={Accelerometer} />
          <Stack.Screen name="Camerafondo" component={Camerafondo} />
          <Stack.Screen name="ImagePicker" component={ImagePicker} />
          <Stack.Screen name="NumeroEmergencia" component={NumeroEmergencia} />
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="QR" component={QR}/>
          <Stack.Screen name="Videoplay" component={Videoplay}/>
         
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}