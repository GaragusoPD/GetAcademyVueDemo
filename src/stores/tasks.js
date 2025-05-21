// src/stores/tasks.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import taskService from '@services/taskService';

export const useTaskStore = defineStore('tasks', () => {
  // State
  const tasks = ref([]);

  // Actions

  /**
   * Add taks to the store
   * @param {object} task A new task object
   * @param {string} task.title The title of the task
   */
  const addTask = async (task) => {
    tasks.value.push({ id: Date.now(), ...task });
  };

  const sortTasks = async () => {
    tasks.value = await taskService.sortTasks(tasks.value);
  };

  return { tasks, addTask, sortTasks };
});