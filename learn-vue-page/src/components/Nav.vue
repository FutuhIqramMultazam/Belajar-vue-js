<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <a href="/">Home</a>
    <a href="/about">About</a> |

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 10px;
}

a {
  color: skyblue;
}
</style>
