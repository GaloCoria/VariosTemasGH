import {StyleSheet, Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Principal(){
    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>
        
        <Button
        style={styles.Boton}
        title="Clima"
        onPress={() => {
          navigation.navigate('Clima')
        }}
      />
       <Button
       style={styles.Boton}
        title="Accelerometer"
        onPress={() => {
          navigation.navigate('Accelerometer')
        }}
      />
       <Button
       style={styles.Boton}
        title="Camerafondo"
        onPress={() => {
          navigation.navigate('Camerafondo')
        }}
      />
       <Button
       style={styles.Boton}
        title="Contactos"
        onPress={() => {
          navigation.navigate('Contactos')
        }}
      />
       <Button
       style={styles.Boton}
        title="ImagePicker"
        onPress={() => {
          navigation.navigate('ImagePicker')
        }}
      />
      <Button
      style={styles.Boton}
        title="QR"
        onPress={() => {
          navigation.navigate('QR')
        }}
      />
       <Button
       style={styles.Boton}
        title="Videoplay"
        onPress={() => {
          navigation.navigate('Videoplay')
        }}
      />
      <Button
      style={styles.Boton}
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
   Boton:{
    marginTop:20
   }
  });