import { useState, useRef } from 'react';
import styles from './TargetItem.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Chart from 'react-apexcharts';
import { TargetItemType } from '../../data/data';
import { ReactComponent as Shevron } from '../../assets/svg/chevron-down.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/cross.svg';

// parent Card

type CardType = {
  param: TargetItemType;
  setExpanded: () => void;
};

const TargetItem = (props: TargetItemType) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }: CardType) {
  return (
    <motion.div
      className={styles.CompactCard}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className={styles.radialBar}>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            // textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: param.color.pathColor,
            textColor: '#fff',
            trailColor: param.color.trailColor,
            backgroundColor: param.color.backgroundColor,
          })}
        />
      </div>
      <div className={styles.detail}>
        <p className={styles.title}>{param.title}</p>
        <p className={styles.term}>{param.term}</p>
      </div>
      <div className={styles.shevron}>
        <Shevron />
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }: CardType) {
  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },

      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['white'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
    },
  };

  return (
    <motion.div className={styles.ExpandedCard} layoutId="expandableCard">
      <div className={styles.ExpandedCardContent}>
        <div
          style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}
        >
          <button onClick={setExpanded} className={styles.closeBtn}>
            <CloseIcon />
          </button>
        </div>
        <span>{param.title}</span>
        <div className={styles.chartContainer}>
          <Chart options={data.options} series={param.series} type="area" />
        </div>
        <span>{param.term}</span>
      </div>
    </motion.div>
  );
}

export default TargetItem;
