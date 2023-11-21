import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface LineGraphProps {
  data: number[];
  labels: string[];
}

const Graph: React.FC<LineGraphProps> = ({ data, labels }) => {
  // Check if there is no data, and render a message if true
  if (data.length === 0) {
    return <p>No data yet</p>;
  }
console.log(data);
  const maxDataValue = Math.ceil(Math.max(...data) * 1.2);

  // Calculate the appropriate stepSize based on the number of points
  const stepSize = Math.max(Math.ceil(maxDataValue / 10), 1);

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        max: maxDataValue,
        ticks: {
          stepSize: stepSize,
          precision: 0,
        },
      },
      x: {
        type: 'category',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false, // Ensure that the chart doesn't maintain an aspect ratio
    responsive: true,
  };

  const dynamicData = {
    labels: labels,
    datasets: [
      {
        label: 'Profile Views',
        data: data,
        fill: true,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(255, 84, 0, 1)'); // Start with vivid orange
          gradient.addColorStop(0.7, 'rgba(255, 84, 0, 0.2)'); // Start fading out at 70%
          gradient.addColorStop(1, 'rgba(255, 84, 0, 0)'); // End with transparent
          return gradient;
        },
        borderColor: 'rgb(255, 84, 0)',
        tension: 0.4,
      },
    ],
  };

  return <Line data={dynamicData} options={options as any} style={{ height: '350px' }} />;
};

export default Graph;
