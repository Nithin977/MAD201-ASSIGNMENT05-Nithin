// Course: F2025 MAD201-01 Cross Platform Mobile Apps
// Assignment: 5 – Task Manager App
// Student Name: Nithin Amin
// Student ID: A00194332
// File: AddTaskScreen.js
// Description: Screen to add or edit a task.

import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';

export default function AddTaskScreen({ navigation }) {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    addTask(title, description);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Task Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: '700' },
});
