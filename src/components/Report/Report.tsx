import styles from './Report.module.scss';
// import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useState, createContext, useEffect } from 'react';

import ReportFilters from '../ReportFilters/ReportFilters';

const monthData = [78, 50, 30, 90, 40, 120, 100];
const yearData = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);

const monthSeries = [
  {
    name: 'Analitcs Report',
    data: [78, 50, 30, 90, 40, 120, 100],
  },
];

const yearSeries = [
  {
    name: 'Analitcs Report',
    data: [100, 78, 50, 120, 30, 90, 40],
  },
];

type SeriesItemType = {
  name: string;
  data: number[];
};

type DataApexType = {
  options: ApexOptions;
  series?: SeriesItemType[];
};

const data: DataApexType = {
  options: {
    chart: {
      type: 'area',
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

export type ReportContextType = {
  activeSort: string;
  setActiveSort: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const ReportContext = createContext<ReportContextType | null>(null);

function Report() {
  const [activeSort, setActiveSort] = useState<string | undefined>('month');
  const [series, setSeries] = useState(data.series);
  const [options, setOptions] = useState(data.options);

  const initialContext: ReportContextType = {
    activeSort: 'month',
    setActiveSort,
  };
  useEffect(() => {
    switch (activeSort) {
      case 'month':
        setSeries((prev: any) => (prev = monthSeries));
        break;
      case 'year':
        setSeries((prev: any) => (prev = yearSeries));
        break;
    }
  }, [activeSort]);

  useEffect(() => {
    console.log(activeSort, series);
  }, [series]);

  return (
    <ReportContext.Provider value={initialContext}>
      <div className={styles.report}>
        <h3 className={styles.title}>Analitcs Report</h3>
        <ReportFilters />
        <div className={styles.table}>
          <ReactApexChart series={series} options={options} type="area" />
        </div>
      </div>
    </ReportContext.Provider>
  );
}

export default Report;
