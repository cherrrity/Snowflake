import React, {useCallback, useState, useEffect, useMemo} from "react";
import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";

import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

import {MainBottomNavigator} from "./src/navigatiors/Navigator"
import { ToggleThemeProvider } from "./src/navigatiors//ToggleThemeProvider";
import {useColorScheme} from "react-native-appearance";

import { LoginScreen } from "./src/views";
import { getUser } from "./src/service/dto/getUser";
import { firebaseAuth } from "./src/service/firebase-config";
import { iUser } from "./src/service/entity/User";


const App = ()=>{
  // THEME SETTING
  const scheme = useColorScheme();
  const [font, setFont] = useState(false);
  const [fontName, setFontName] = useState("NanumGothic");
  
  const [theme, setTheme] = useState(scheme == "dark" ? DarkTheme : DefaultTheme);

  const toggleTheme = useCallback(()=>{setTheme(({dark}) => {return dark ? DefaultTheme : DarkTheme;}); }, []);
  const fontNameToggle = useCallback(()=>{
    setFont(font => !font); 
    setFontName((font)=>{return font? "NanumMyeongjo":"NanumGothic"}); 
  }, []);


  // LOGIN SETTING 
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // login provider 구현해야 할 듯요.
  if (!firebase.apps.length) {
    //firebase.initializeApp(FIREBASE_CONFIG)
  }

  if(user){
    return (
      <ToggleThemeProvider toggle = {toggleTheme} fontNameToggle = {fontNameToggle} isFontToggle={font} fontFamily={fontName}>
        <NavigationContainer theme = {theme}>
          <MainBottomNavigator/>
        </NavigationContainer>
      </ToggleThemeProvider>);
  }else{
    return (
      <LoginScreen/>
      );
  }
}
export default App;
