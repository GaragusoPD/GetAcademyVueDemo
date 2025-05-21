<script setup>
const props = defineProps({
    tasks: {
        type: Array,
        required: true
    }
});
</script>
<template>
    <table aria-label="List of tasks">
        <caption class="sr-only">Task Management List</caption>
        <thead>
            <tr>
                <th scope="col">Task ID</th>
                <th scope="col">Task Title</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.id }}</td>
                <td>{{ task.title }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">
                    <strong>Total Tasks: {{ tasks.length }}</strong>
                </td>
            </tr>
        </tfoot>
    </table>
</template>
<style scoped>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
</style>