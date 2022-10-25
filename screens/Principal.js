import {StyleSheet, Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Principal(){
    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>
        
        <Button
        title="Clima"
        onPress={() => {
          navigation.navigate('Clima')
        }}
      />
       <Button
        title="Accelerometer"
        onPress={() => {
          navigation.navigate('Accelerometer')
        }}
      />
       <Button
        title="Camerafondo"
        onPress={() => {
          navigation.navigate('Camerafondo')
        }}
      />
       <Button
        title="Contactos"
        onPress={() => {
          navigation.navigate('Contactos')
        }}
      />
       <Button
        title="ImagePicker"
        onPress={() => {
          navigation.navigate('ImagePicker')
        }}
      />
      <Button
        title="QR"
        onPress={() => {
          navigation.navigate('QR')
        }}
      />
       <Button
        title="Videoplay"
        onPress={() => {
          navigation.navigate('Videoplay')
        }}
      />
      <Button
        title="NumeroEmergencia"
        onPress={() => {
          navigation.navigate('NumeroEmergencia')
        }}
      />
        </View >
    )
} 

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
   
  });