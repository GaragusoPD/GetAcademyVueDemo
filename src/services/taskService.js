// src/services/taskService.js

// Create the worker and keep it in memory
const worker = new Worker(new URL('../workers/worker.js', import.meta.url));

export default {
  async sortTasks(tasks) {
    return new Promise((resolve) => {
      worker.postMessage(JSON.parse(JSON.stringify(tasks)));
      worker.onmessage = (e) => {
        resolve(e.data);
      };
    });
  },
};