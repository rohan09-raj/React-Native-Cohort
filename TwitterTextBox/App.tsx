import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const App: React.FC<{}> = () => {
  const MAX_CHAR_LIMIT = 20;

  const [count, setCount] = useState(MAX_CHAR_LIMIT);
  const [color, setColor] = useState('#000');
  const [background, setBackground] = useState('#dcdcdc');

  const getLengthOfString = (characterString: string) => {
    var value = MAX_CHAR_LIMIT - characterString.length;
    setCount(value);
    getColor(value);
  };

  const getColor = (charCount: number) => {
    if (charCount <= 0) {
      setColor('#ff0000');
      setBackground('#ffc7c7');
    } else if (charCount <= 10) {
      setColor('#ffdd00');
      setBackground('#fffced');
    } else {
      setColor('#000000');
      setBackground('#dcdcdc');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/ReactNativeLogo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Twitter Tweet Box</Text>
      <TextInput
        style={[
          styles.input,
          {borderColor: color, backgroundColor: background},
        ]}
        multiline={true}
        onChangeText={charString => getLengthOfString(charString)}
      />
      <Text
        style={[
          styles.wordCount,
          {borderColor: color, color: color, backgroundColor: background},
        ]}>
        {count} Characters Remaining
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
    height: '12.5%',
    width: '100%',
    marginBottom: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
  },
  input: {
    height: '40%',
    margin: 12,
    fontSize: 20,
    textAlignVertical: 'top',
    borderRadius: 20,
    borderWidth: 4,
    padding: 20,
  },
  wordCount: {
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 4,
    textAlign: 'center',
    padding: 40,
    margin: 12,
    fontWeight: '700',
  },
});

export default App;
