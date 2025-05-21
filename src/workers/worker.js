// src/worker.js
self.onmessage = (e) => {
  const tasks = e.data;
  const sortedTasks = tasks.sort((a, b) => a.title.localeCompare(b.title));
  self.postMessage(sortedTasks);
};