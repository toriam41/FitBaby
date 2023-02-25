import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import {auth} from 'C:/Users/BenjaminNguyen/Fitbaby/src/firebase-config'

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');

    const resetPassword = async function (email) {
        //const emailValue = email;
        try {
            await auth.sendPasswordResetEmail(email)
            Alert.alert('Password reset email sent successfully');
        }
        catch (error) {
            Alert.alert('There is no account associated with this email :(');
        }

        /*firebase.auth().sendPasswordResetEmail(emailValue)
        .then(() => {
            Alert.alert('Password reset email sent successfully');
        }).catch((error) => {
            Alert.alert('Error sending password reset email', error.message);
        });*/
    }
  return (
    <View>
        <TextInput
            value={email}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity onPress={() => resetPassword(email)}>
            <View>
                <Text>Reset Password</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ForgotPasswordScreen