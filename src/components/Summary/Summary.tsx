import styles from './Summary.module.scss';
const mainSummaryData = [
  {
    title: 'Total Earning',
    amount: 120000,
    percent: {
      title: 'Increase',
      value: 12,
    },
  },
  {
    title: 'Invoices',
    amount: 6500,
    percent: {
      title: 'Decrease',
      value: 2,
    },
  },
  {
    title: 'Total Spending',
    amount: 48670,
    percent: {
      title: 'Increase',
      value: 2,
    },
  },
  {
    title: 'Balance',
    amount: 74330,
    percent: {
      title: 'Decrease',
      value: 5,
    },
  },
];
function Summary() {
  return (
    <div className={styles.summary}>
      {mainSummaryData &&
        mainSummaryData.map((item, index) => {
          return (
            <div className={styles.item}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.amount}>
                {item.amount.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
              <p className={styles.percent}>
                <span className={styles.percentValue}>
                  {item.percent.value}%{' '}
                </span>
                {item.percent.title} From Target
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Summary;
