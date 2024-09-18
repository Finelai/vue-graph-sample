<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { PATHS } from '@/routes';
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>
    <nav class="menu">
      <router-link :to="PATHS.home.path">Home</router-link>
      <router-link :to="PATHS.graph.path">Graph</router-link>
      <router-link :to="PATHS.settings.path">Settings</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  height: 70px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid magenta;
  box-shadow: 0px 1px 5px magenta;

  .logo {
    img {
      width: 60px;
      height: 60px;
    }
  }

  .menu {
    a {
      font-size: 22px;
      margin-right: 10px;
      color: #333;

      &.router-link-active,
      &:hover {
        color: magenta;
        font-weight: bold;
      }
    }
  }
}
</style>
