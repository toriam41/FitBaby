import { async } from '@firebase/util';
import messenging from 'react-native-firebase/messenging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../../firebase-config';

async function requestUserPermission() {
    const authStatus = await messenging().requestUserPermission();
    const enabled =
        authStatus === messenging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messenging.AuthorizationStatus.PROVISIONAL;
    if (enabled){
        console.log('Authorization status:', authStatus);
    }
}

function GetFCMToken(){
    let fcmtoken = AsyncStorage.getItem("fcmtoken");
    if(!fcmtoken){
        try{
            let fcmtoken = messenging().getToken();
            if(fcmtoken){
                console.log(fcmtoken,"new token");
                //await AsyncStorage.setItem("fcmtoken",fcmtoken);
            }
        }catch (error){
            console.log(error,"error in fcmtoken");
        }

    }
}