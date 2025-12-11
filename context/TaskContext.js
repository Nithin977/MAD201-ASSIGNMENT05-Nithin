// Course: F2025 MAD201-01 Cross Platform Mobile Apps
// Assignment: 5 – Task Manager App
// Student Name: Nithin Amin
// Student ID: A00194332
// File: TaskContext.js
// Description: Global state management for tasks using Context API.

import { createContext, useState } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Welcome Task',
      description: 'Tap to see details, mark complete, or delete.',
      completed: false,
    },
  ]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, removeTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
}
