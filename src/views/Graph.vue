<script setup lang="ts">
import { store } from '@/store.ts';

import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const props = defineProps<{
  bgColor?: string;
}>();

const graphData = {
  labels: store.graphData.labels,
  datasets: [
    {
      backgroundColor: props.bgColor[0] !== ':' ? props.bgColor : store.graphData.backgroundColor,
      data: store.graphData.metrics,
    },
  ],
};

const graphOptions = {
  responsive: true,
};
</script>

<template>
  <section class="container">
    <h1>Graph</h1>
    <div class="chart-container">
      <Bar :data="graphData" :options="graphOptions" />
    </div>
  </section>
</template>

<style lang="scss">
.chart-container {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 650px;
}
</style>
