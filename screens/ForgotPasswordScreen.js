import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import {firebase} from 'C:/Users/BenjaminNguyen/Fitbaby/src/firebase-config.js'
import Parse from 'parse/react-native.js';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const resetPassword = async function () {
        const emailValue = email;

        Parse.User.requestPasswordReset(emailValue).then(() => {
            Alert.alert('Password reset email sent successfully');
        }).catch((error) => {
            Alert.alert('Error sending password reset email', error.message);
        });
    }
  return (
    <View>
        <TextInput
            value={email}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity onPress={resetPassword}>
            <View>
                <Text>Reset Password</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ForgotPasswordScreen