import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Second() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
        style={{height: 30, width: 200, backgroundColor: 'grey'}}>
        <Text style={{textAlign: 'center', color: '#fff'}}>Logout </Text>
      </TouchableOpacity>
    </View>
  );
}
