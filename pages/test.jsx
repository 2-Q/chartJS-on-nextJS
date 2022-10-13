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


export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem' }}>
      <div style={{ width: '500px' }}>
        <Line
          datasetIdKey='id'
          data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                id: 1,
                label: '',
                data: [5, 9, 7],
              },
            ],
          }}
        />
      </div>
    </div>
  )
}
