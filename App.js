import React, { Component } from "react";
// import { AppLoading } from 'expo';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Asmbed from "./Asmbed";
import store from "./src/store/index";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Asmbed />
      </Provider>
    );
  }
}
