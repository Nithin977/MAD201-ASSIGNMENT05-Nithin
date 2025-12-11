// Course: F2025 MAD201-01 Cross Platform Mobile Apps
// Assignment: 5 – Task Manager App
// Student Name: Nithin Amin
// Student ID: A00194332
// File: CompletedTasksScreen.js
// Description: Displays only completed tasks.

import { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TaskContext } from '../context/TaskContext';

export default function CompletedTasksScreen() {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
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
});
