import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import css from './ContactListItem.module.css';

export function ContactListItem({ name, number, buttonId }) {
  const dispatch = useDispatch();
  const handleDeleteContacts = event => {
    dispatch(deleteContacts(event.target.id));
  };

  return (
    <ul className={css.list}>
      <li className={css.item}>
        {name}: <span>{number}</span>
        <button
          id={buttonId}
          onClick={handleDeleteContacts}
          className={css.buttonDelete}
        >
          Delete
        </button>
      </li>
    </ul>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
