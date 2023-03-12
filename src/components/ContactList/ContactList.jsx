import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/selectors';
import { getContacts } from 'redux/operation';

export function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilterContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} buttonId={id} />
      ))}
    </ul>
  );
}
