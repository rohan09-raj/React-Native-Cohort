import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, Pressable, StyleSheet, View} from 'react-native';

import CounterApp from './src/CounterApp';
import TweetBoxApp from './src/TweetBoxApp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'React Native Projects'}}
        />
        <Stack.Screen name="Tweet Box" component={TweetBoxScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Tweet Box')}>
        <Text style={styles.button}>Tweet Box App</Text>
      </Pressable>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.button}>Counter App</Text>
      </Pressable>
    </View>
  );
};

const TweetBoxScreen = ({navigation}) => {
  return <TweetBoxApp />;
};

const CounterScreen = ({navigation}) => {
  return <CounterApp />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#000000',
    padding: 8,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    borderRadius: 5,
  },
  pressable: {
    height: 100,
    width: '50%',
  },
});

export default App;
