<script setup>

</script>
<template>
    <nav class="flex gap">
        <router-link to="/">Welcome</router-link>
        <router-link :to="{name:'Tasks'}">Tasks</router-link>
    </nav>
</template>
<style scoped>
nav {
    padding: 1rem;
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
}
nav a {
    text-decoration: none;
    color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
}
nav a:hover {
    background-color: #e2e6ea;
    color: #0056b3;
}
nav a.router-link-active {
    background-color: #007bff;
    color: white;
}
</style>