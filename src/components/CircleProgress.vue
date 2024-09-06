<script setup>
import * as echarts from "echarts";
import { onMounted, onBeforeUnmount, watch, ref } from "vue";

// Define the props for the CircleProgress component
const props = defineProps({
  progressValue: {
    type: Number,
    required: true,
    default: 20,
  },
  minValue: {
    type: Number,
    required: true,
    default: 0,
  },
  maxValue: {
    type: Number,
    required: true,
    default: 100,
  },
  fontSize: {
    type: Number,
    default: 22,
  },
  fontLineHeight: {
    type: Number,
    default: 29,
  },
  fontColor: {
    type: String,
    default: "rgba(15, 31, 60, 1)",
  },
  offsetColor: {
    type: String,
    default: "rgba(227, 237, 255, 1)",
  },
  progresColor: {
    type: String,
    default: "rgba(66, 131, 252, 1)",
  },
  lineWidth: {
    type: Number,
    default: 15,
  },
  viewport: {
    type: Number,
    default: 100,
  },
});

// Create a reference for the chart DOM element
const chartRef = ref(null);

// Variable to store the chart instance
let myProgessBar = null;

// Function to create or update the progress bar chart
const getProgressBar = () => {
  const chartDom = chartRef.value;

  if (!chartDom) return;

  // Dispose the existing chart instance if it's already initialized
  if (myProgessBar) {
    myProgessBar.dispose();
  }

  // Initialize a new chart instance
  myProgessBar = echarts.init(chartDom);

  const gaugeData = [
    {
      value: props.progressValue,
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '0%'],
      },
      itemStyle: {
        color: props.progresColor,
        global: false,
      },
    },
  ];

  // Configuration for the progress bar
  const progessBarConf = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        min: props.minValue,
        max: props.maxValue,
        radius: "100%",
        center: ['50%', '50%'],
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
        },
        axisLine: {
          lineStyle: {
            width: props.lineWidth,
            color: [[1, props.offsetColor]],
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,
        title: {
          show: false,
        },
        detail: {
          fontSize: props.fontSize,
          lineHeight: props.fontLineHeight,
          color: props.fontColor,
          formatter: "{value}",
          offsetCenter: ["0", "0"],
        },
      },
    ],
  };

  // Apply the configuration to the chart
  myProgessBar.setOption(progessBarConf);
};

// Initialize chart on component mount
onMounted(() => {
  getProgressBar();
});

// Watch for changes in progressValue and update the chart accordingly
watch(
  () => props.progressValue,
  () => {
    getProgressBar();
  }
);

// Dispose the chart when the component is unmounted
onBeforeUnmount(() => {
  if (myProgessBar) {
    myProgessBar.dispose();
  }
});
</script>

<template>
  <div class="vue-circle-progresbar">
    <div
      ref="chartRef"
      :style="{ width: viewport + 'px', height: viewport + 'px' }"
    ></div>
  </div>
</template>
