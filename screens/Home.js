import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Second');
        }}
        style={styles.button}>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
          Go to Second Page
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 30,
    width: 200,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
