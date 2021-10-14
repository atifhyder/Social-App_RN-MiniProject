

import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import HomeScreen from './components/HomeScreen/HomeScreen'
import NewPostPanel from './components/NewPostPanel/NewPostPanel';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const initialState = {

  userName: 'atif',
  password: 'hyder',
  flag: false,

}
const reducer = (state = initialState, action) => {


  switch (action.type) {

    case 'checklogin':
      if (action.payload.userName == state.userName && action.payload.password == state.password) {
        return { flag: state.flag = true }
      }
    default:
      return state;
  }

}


const store = createStore(reducer);

function App() {
  return (

    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginPage'>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="NewPostPanel" component={NewPostPanel} />
        </Stack.Navigator>
      </NavigationContainer>


    </Provider>

  );
} export default App
