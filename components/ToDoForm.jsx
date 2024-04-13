import React from 'react';
import taskData from '../data/tasks';
import {
    SafeAreaView,
    useState,
    useEffect,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';

function ToDoForm() {
  const [randomTask, setRandomTask] = React.useState('');

  const generateRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * taskData.length);
    return taskData[randomIndex];
  }

  const handleGenerateTask = () => {
    setTask(generateRandomTask());
  }

  return (
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Click the button to generate a random task.."
          value={randomTask}
          onChangeText={setRandomTask}
        />
        <Button title="Generate Random Task" onPress={handleGenerateTask}/>
      </View>
  );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;