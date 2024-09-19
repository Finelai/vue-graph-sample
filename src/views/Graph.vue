<script setup lang="ts">
import { store } from '@/store.ts';

import { NButton } from 'naive-ui';

import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const props = defineProps<{
  bgColor: string;
  labels: string;
  metrics: string;
}>();

const graphData = {
  labels: props.labels !== '' ? JSON.parse(props.labels) : store.graphData.labels,
  datasets: [
    {
      backgroundColor: props.bgColor !== '' ? props.bgColor : store.graphData.backgroundColor,
      data: props.metrics !== '' ? JSON.parse(props.metrics) : store.graphData.metrics,
    },
  ],
};

const graphOptions = {
  responsive: true,
};

function handlePreviewBtn() {
  if (props.bgColor !== '') store.changeGraphBGColor(props.bgColor);
  if (props.labels !== '') store.changeGraphLabels(JSON.parse(props.labels));
  if (props.metrics !== '') store.changeGraphMetrics(JSON.parse(props.metrics));
}
</script>

<template>
  <section class="container">
    <h1>Graph</h1>

    <div class="chart-container">
      <Bar :data="graphData" :options="graphOptions" />
    </div>

    <div
      v-if="props.bgColor[0] !== ':' && props.bgColor !== '' && props.bgColor !== store.graphData.backgroundColor"
      class="preview"
    >
      <span class="preview__text">This is preview! Do you want to save it?</span>
      <n-button strong secondary block type="success" @click="handlePreviewBtn">Save Settings</n-button>
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

.preview {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2vh 4vw;

  &__text {
    font-weight: bold;
    font-size: 22px;
  }
}
</style>
