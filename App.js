// Course: F2025 MAD201-01 Cross Platform Mobile Apps
// Assignment: 5 – Task Manager App
// Student Name: Nithin Amin
// Student ID: A00194332
// File: App.js
// Description: Root file that initializes navigation and wraps app with TaskProvider.

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskProvider } from './context/TaskContext';

import AddTaskScreen from './screens/AddTaskScreen';
import AllTasksScreen from './screens/AllTasksScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TaskTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Tasks" component={AllTasksScreen} />
      <Tab.Screen name="Completed" component={CompletedTasksScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tasks" component={TaskTabs} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
          <Stack.Screen name="TaskDetails" component={TaskDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
