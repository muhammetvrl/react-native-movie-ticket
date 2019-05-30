import React, { Component } from "react";

import { StackNavigator } from "react-navigation";
import Movies from "./src/Movies";
import Confirmation from "./src/Confirmation";

import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Movies
    },
    Confirmation: {
      screen: Confirmation
    }
  }
);


const App = createAppContainer(RootStack);

export default App;



