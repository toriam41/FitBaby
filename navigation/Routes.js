import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const Routes = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
}

export default Routes;