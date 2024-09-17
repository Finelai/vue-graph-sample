<template>
  <section class="container">
    <h1>Graph</h1>
    <div class="chart-container">
      <Bar :data="data" :options="options" />
    </div>
  </section>
</template>

<script lang="ts">
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default {
  name: 'App',
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
};
</script>

<style lang="scss">
.chart-container {
  position: relative;
  margin: auto;
  height: 50vh;
  width: 50vw;
}
</style>
