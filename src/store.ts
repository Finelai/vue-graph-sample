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
    metrics: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    backgroundColor: '#ff00ff',
  },
});
