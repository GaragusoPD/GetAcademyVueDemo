<!-- src/views/Tasks.vue -->
<script setup>
import { reactive, ref } from 'vue';
import { useTaskStore } from '@stores/tasks';
import TaskList from '@/components/tasks/TaskList.vue';

const taskStore = useTaskStore();
const newTask = reactive({
    title: ''
});

function addTask() {
    // Check if the task title is empty before adding it to the store
    if (!newTask.title) return;

    // We make a copy of the newTask object to avoid mutating the original object
    // when we add it to the store
    taskStore.addTask({ ...newTask });

    // Clear the input field after adding the task
    newTask.title = '';
};

// Function to sort tasks in the store
// This function will be called when the "Sort Tasks" button is clicked
const sortTasks = () => taskStore.sortTasks();
</script>

<template>
    <div>
        <h3>New task</h3>
        <div class="flex gap semi-padded">
            <input v-model="newTask.title" placeholder="Task title" @keydown.enter="addTask" />
            <button @click="addTask">Add Task</button>
            <button @click="sortTasks">Sort Tasks</button>
        </div>

        <section class="semi-padded">
            <p v-if="taskStore.tasks.length === 0">
                No tasks available.            
            </p>
        </section>
        
        <section class="semi-padded">
            <h3>Task List</h3>
            <TaskList :tasks="taskStore.tasks" />
        </section>
    </div>
</template>

