import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from '@firebase/util';

async function requestUserPermission(){
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZTION ||
        authStatus === messaging.AuthorizationStatus.PROVISONAL;
    
    if (enabled){
        console.log('Authorization status: ', authStatus);
        GetFCMToken();
    }
}

function GetFCMToken(){
    let fcmtoken = await AsyncStorage.getItem("fcmtoken");
    console.log(fcmtoken,"old token");
    if(!fcmtoken){
        try{
            const fcmtoken = await messaging().getToken();
            if(fcmtoken){
            
                console.log(fcmtoken,"new token");
                await AsyncStorage.setItem("fcmtoken",fcmtoken);

            }
        }catch (error){
            console.log(error, "error in fcm token");
        }

    }
}