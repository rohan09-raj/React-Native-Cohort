import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Pressable} from 'react-native';

interface Count {
  name: string;
  counter: number;
}

const Counter: React.FC<Count> = ({name, counter}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hello,{' '}
        {name
          .split(' ')
          .map(word => word)
          .join(' ')}{' '}
        !
      </Text>
      <Text style={styles.number}>{counter}</Text>
    </View>
  );
};

const CounterApp: React.FC<{}> = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={username => setName(username)}
        value={name}
      />
      <Counter name={name} counter={count} />
      <View style={styles.buttonController}>
        <Pressable
          onPress={() => {
            setCount(count - 1);
          }}>
          <Text style={styles.button}>-</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text style={styles.button}>+</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setCount(0);
          }}>
          <Text style={styles.button}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  number: {
    fontSize: 50,
    textAlign: 'center',
    color: '#000',
  },
  buttonController: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    borderRadius: 5,
  },
});

export default CounterApp;
