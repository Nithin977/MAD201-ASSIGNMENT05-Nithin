Task Manager App - Assignment 5
Student Name: Nithin Amin
Student ID: A00194332
Name: F2025 MAD201-01 Cross Platform Mobile Apps.
Overview
Task Manager App is a mobile application created on the foundation of the React Native and Expo. It enables one to add, view, update, complete, and delete tasks. Some of the essential ideas exhibited by the project include navigation, state management with the help of Context API, and the design of reusable components.
Learning Objectives
 Add multi screen navigation with Stack and Tab navigators.
 State management and sharing with Context API.
 Dynamic data management Use useState, useEffect.
 Send and retrieve information between screens using navigation props.
 Utilize acceptable project organization and design components.

Context API.
The application employs an international task shop made on Context API. The tasks list is handled by the following functions:
 addTask(title, description)
 updateTask(id, updates)
 removeTask(id)
 toggleComplete(id)
Navigation Flow
In the app, the navigation is both using stack and tab:
Stack Navigator:
 Tasks (root)
 AddTask
 TaskDetails
Tab Navigator:
 All Tasks
 Completed Tasks
Screens
 All Tasks Screen - shows all the tasks with Add button floating.
 Completed tasks Screen - displays only completed tasks.
 Add Task Screen - form to add or to edit tasks.
 Task Detail Screen - see all the task details, complete, modify, or delete.
Installation & Setup
Run: npm install
Install navigational packages:
   npm install react-navigation/native.
   npm install react-navigation/native-stack.
   npm install react-navigation/bottom-tabs.
   npx expo install react-native-screens react-native-safe-area-context.
Start the project: npx expo start