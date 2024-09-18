<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="container">
    <div class="not-found">
      <h1>Page Not Found</h1>
      <RouterLink to="/">Return to Home</RouterLink>
    </div>
  </section>
</template>

<style lang="scss">
.not-found {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px 40px;
  border: 3px solid red;
  text-align: center;

  h1 {
    color: red;
    font-weight: bold;
    margin-bottom: 2vh;
  }

  a {
    font-size: 22px;
    color: #fff;
    background-color: mediumseagreen;
    padding: 10px 30px;
    width: 100%;
    max-width: 120px;

    &:hover {
      background-color: green;
    }
  }
}
</style>
