import { BackHandler, Alert } from "react-native";
const handleAndroidBackButton = callback => {
  BackHandler.addEventListener("hardwareBackPress", () => {
    callback();
    return true;
  });
};
const removeAndroidBackButtonHandler = () => {
  BackHandler.removeEventListener("hardwareBackPress", () => {});
};
const exitApp = () => {
  BackHandler.addEventListener("hardwareBackPress", () => {
    BackHandler.exitApp();
    return true;
  });
};
module.exports = {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler,
  exitApp
};
