import css from './style.module.css';
import { setFilter } from 'redux/filters/actions';
import { useDispatch } from 'react-redux';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        onChange={handleFilter}
        className={css.input}
        type="text"
        name="filter"
      />
    </div>
  );
};

export default ContactsFilter;
