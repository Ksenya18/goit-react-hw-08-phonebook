import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

import css from './Filter.module.css';

export function Filter() {
  const value = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onFilterChange = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };

  return (
    <div className={css.contactsContainer}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}
