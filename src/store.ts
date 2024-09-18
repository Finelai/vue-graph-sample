import { reactive } from 'vue';

export const store = reactive({
  graphData: {
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
    metrics: [40, 20, 12, 46, 10, 31, 15, 80, 65, 20, 12, 11],
    backgroundColor: '#ff00ff',
  },
  changeGraphBGColor(newColor: string) {
    this.graphData.backgroundColor = newColor;
  },
  changeGraphLabels(newLabels: string[]) {
    this.graphData.labels = newLabels;
  },
  changeGraphMetrics(newMetrics: number[]) {
    this.graphData.metrics = newMetrics;
  },
});
