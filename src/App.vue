<script setup lang="ts">
  import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <h1>Hello world!</h1>
  <nav>
    <RouterLink v-for="route in this.$router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</RouterLink>
  </nav>
  <RouterView />
</template>