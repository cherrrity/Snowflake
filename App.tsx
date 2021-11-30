import React, {useCallback, useState} from "react";
import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";

import {MainBottomNavigator} from "./src/navigatiors/Navigator"
import { ToggleThemeProvider } from "./src/navigatiors//ToggleThemeProvider";
import {useColorScheme} from "react-native-appearance";

const App = ()=>{
  const scheme = useColorScheme();
  const [font, setFont] = useState(false);
  const [fontName, setFontName] = useState("NanumGothic");
  
  const [theme, setTheme] = useState(scheme == "dark" ? DarkTheme : DefaultTheme);

  const toggleTheme = useCallback(()=>{setTheme(({dark}) => {return dark ? DefaultTheme : DarkTheme;}); }, []);
  const fontNameToggle = useCallback(()=>{
    setFont(font => !font); 
    setFontName((font)=>{return font? "NanumMyeongjo":"NanumGothic"}); 
  }, []);


  return (
  <ToggleThemeProvider toggle = {toggleTheme} fontNameToggle = {fontNameToggle} isFontToggle={font} fontFamily={fontName}>
    <NavigationContainer theme = {theme}>
      <MainBottomNavigator/>
    </NavigationContainer>
  </ToggleThemeProvider>);
}
export default App;
