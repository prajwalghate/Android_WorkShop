import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './Home';
import Second from './Second';
import SignUp from './SignUp';
import LogIn from './LogIn';

import auth from '@react-native-firebase/auth';

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Second" component={Second} />
  </Stack.Navigator>
);
const LoginStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="LogIn" component={LogIn} />
  </Stack.Navigator>
);

export default function Index() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  // return (
  //   <View>
  //     <Text>Welcome {user.email}</Text>
  //   </View>
  // );
  return (
    <NavigationContainer>
      {!user ? <LoginStack /> : <HomeStack />}
    </NavigationContainer>
  );
}
