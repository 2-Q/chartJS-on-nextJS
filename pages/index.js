
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'title',
      align: "start",
    },
    legend: {
      position: "top",
      align: "start",
      labels: {
        usePointStyle: true,
      },
      rtl: true
    },
    tooltip: {
      backgroundColor: "#575757",
      padding: 12,
      usePointStyle: true,
      displayColors: false,
    }
  },
  scales: {
    y: {
      display: true,
      suggestedMax: 800,
      min: 0,
      grid: {
        drawBorder: false,
      }

    },
    x: {
      display: true,
      grid: {
        drawBorder: false,
        color: false
      }
    },
  },
  hoverOffset: 0,
  offset: 20,
  cubicInterpolationMode: 'monotone',
  pointBorderWidth: 2
};

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem' }}>
      <div style={{ width: '500px' }}>
        <Line
          options={options}
          data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                id: 1,
                label: '',
                data: [5, 900, 7],
              },
            ],
          }}
        />
      </div>
    </div>
  )
}
