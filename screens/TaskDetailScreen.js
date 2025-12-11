// Course: F2025 MAD201-01 Cross Platform Mobile Apps
// Assignment: 5 – Task Manager App
// Student Name: Nithin Amin
// Student ID: A00194332
// File: TaskDetailScreen.js
// Description: Displays task details and allows complete or delete actions.

import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';

export default function TaskDetailScreen({ route, navigation }) {
  const { taskId } = route.params;
  const { tasks, toggleComplete, removeTask } = useContext(TaskContext);

  const task = tasks.find((t) => t.id === taskId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.completed ? 'Completed' : 'Pending'}</Text>
      <Text>{task.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleComplete(task.id)}
      >
        <Text style={styles.buttonText}>Toggle Complete</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => {
          removeTask(task.id);
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: '700' },
});
