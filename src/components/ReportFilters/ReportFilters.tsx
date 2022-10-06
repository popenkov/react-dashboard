import { useContext, useState } from 'react';
import clsx from 'clsx';
import Select, { components } from 'react-select';
import styles from './ReportFilters.module.scss';
import { ReportContext, ReportContextType } from '../Report/Report';

const options = [
  { value: 'month', label: 'By last month' },
  { value: 'year', label: 'By year' },
];
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <span
        className={clsx(styles.dropdownArrow, {
          [styles.dropdownArrowUp]: props.innerProps.isFocused,
        })}
      />
    </components.DropdownIndicator>
  );
};

function ReportFilters() {
  const [currentSort, setCurrentSort] = useState(options[0]);

  const { activeSort, setActiveSort } = useContext<ReportContextType | null>(
    ReportContext
  );
  console.log(activeSort, setActiveSort);
  const handleChange = (option) => {
    setCurrentSort(option);
    setActiveSort(option.value);
  };

  return (
    <div className={styles.filter}>
      <Select
        value={currentSort}
        onChange={handleChange}
        options={options}
        components={{ DropdownIndicator }}
        classNamePrefix="filter-select"
      />
    </div>
  );
}

export default ReportFilters;
