import { View, Text , StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ClimaScreen from '../screens/Clima'
import HomeScreen from '../screens/HomeScreen'
import Contactos from '../screens/Contacts'
import NumeroEmergencia from '../screens/NumeroEmergencia'
import AccelerometerScreen from '../screens/Accelerometer'
import VideoPlayerScreen from '../screens/VideoPlayer'
import CameraFondo from '../screens/Camera'
import ImagePickerScreen from '../screens/ImagePicker'
import Qr from '../screens/QR'
import Camera from '../screens/QR'

const Stack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
          <Stack.Screen name={'Home'} component={HomeScreen}/>
          <Stack.Screen name={'Clima'} component={ClimaScreen}/>
          <Stack.Screen name={'Contactos'} component={Contactos}/>
          <Stack.Screen name={'NumeroEmergencia'} component={NumeroEmergencia}/>
          <Stack.Screen name={'Accelerometer'} component={AccelerometerScreen}/>
          <Stack.Screen name={'VideoPlayer'} component={VideoPlayerScreen}/>
          <Stack.Screen name={'CameraFondo'} component={CameraFondo}/>
          <Stack.Screen name={'ImagePicker'} component={ImagePickerScreen}/>
          <Stack.Screen name={'Qr'} component={Qr}/>
          <Stack.Screen name={'Camera'} component={Camera}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
});

export default HomeStackScreen