// Course: F2025 MAD201-01 Cross Platform Mobile Apps
// Assignment: 5 – Task Manager App
// Student Name: Nithin Amin
// Student ID: A00194332
// File: AllTasksScreen.js
// Description: Displays all tasks using FlatList and provides Add Task button.

import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';

export default function AllTasksScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('TaskDetails', { taskId: item.id })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.completed ? 'Completed' : 'Pending'}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
  },
  title: { fontSize: 16, fontWeight: '600' },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: { color: '#fff', fontSize: 28 },
});
