import styles from './Report.module.scss';
import Chart from 'react-apexcharts';

const data = {
  options: {
    chart: {
      type: '"area"',
      height: 'auto',
    },

    fill: {
      colors: ['#fff', 'rgba(52, 80, 177, 0.1)', 'rgba(52, 80, 177, 0.05)'],
      type: 'gradient',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#037BCB'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2022-09-19T00:00:00.000Z',
        '2022-09-19T01:30:00.000Z',
        '2022-09-19T02:30:00.000Z',
        '2022-09-19T03:30:00.000Z',
        '2022-09-19T04:30:00.000Z',
        '2022-09-19T05:30:00.000Z',
        '2022-09-19T06:30:00.000Z',
      ],
    },
    yaxis: {
      show: false,
    },
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: 'Analitcs Report',
      data: [78, 50, 30, 90, 40, 120, 100],
    },
  ],
};

function Report() {
  return (
    <div className={styles.report}>
      <h3>Analitcs Report</h3>
      <div className={styles.table}>
        <Chart series={data.series} options={data.options} type="area" />
      </div>
    </div>
  );
}

export default Report;
