<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="container">
    <h1>Home</h1>
    <div class="home-menu">
      <RouterLink to="/graph">Graph</RouterLink>
      <RouterLink to="/settings">Settings</RouterLink>
    </div>
  </section>
</template>

<style lang="scss">
.home-menu {
  width: 100%;
  max-width: 300px;
  border: 1px solid magenta;
  margin: 2vh auto 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2vh 2vw;
  text-align: center;

  a {
    line-height: 70px;
    border: 1px solid magenta;
    font-size: 24px;
    color: #333;
    box-shadow: 2px 2px 5px magenta;

    &:first-child {
      margin-bottom: 2vh;
    }

    &:hover {
      background-color: magenta;
      color: #fff;
      box-shadow: none;
    }
  }
}
</style>
