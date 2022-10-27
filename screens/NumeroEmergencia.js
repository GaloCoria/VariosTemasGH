import React, {useState} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Linking
} from 'react-native';
 
// import Call API
import call from 'react-native-phone-call';




const NumeroEmergencia = () => {
  const [inputValue, setInputValue] = useState('1124620905');

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }
 
    const args = {
      number: inputValue,
      prompt: true,
    };
    
    call(args).catch(console.error);
  };
 const handleSMSPress = async () =>{
  await Linking.openURL("sms:+1127389031?body=mensaje de texto predefinido");
 }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleTextsmall}>
          Enter Contact Number to Call
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={
            (inputValue) => setInputValue(inputValue)
          }
          placeholder={'Enter Conatct Number to Call'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}>
            Make a Call
          </Text>

        </TouchableOpacity>
        
          <Button title="sms" onPress={handleSMSPress}></Button>
         
      </View>
    </SafeAreaView>
  );
};
 
export default NumeroEmergencia ;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
