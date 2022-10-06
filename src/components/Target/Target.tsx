import styles from './Target.module.scss';

import { cardsData as targetData } from '../../data/data';
import TargetItem from '../TargetItem/TargetItem';

// const targetData = [
//   {
//     title: 'Sale of goods',
//     percent: '60',
//     color: '',
//     term: '1 month later',
//   },
//   {
//     title: 'property rental',
//     percent: '70',
//     color: '',
//     term: '3 month later',
//   },
//   {
//     title: 'Sale of goods',
//     percent: '60',
//     color: '',
//     term: '1 month later',
//   },

//   {
//     title: 'Sale of goods',
//     percent: '60',
//     color: '',
//     term: '1 month later',
//   },
// ];

function Target() {
  return (
    <div className={styles.target}>
      <h3 className={styles.title}>Target</h3>
      {targetData &&
        targetData.map((item, index) => {
          return <TargetItem {...item} key={index} />;
        })}
    </div>
  );
}

export default Target;
