
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
