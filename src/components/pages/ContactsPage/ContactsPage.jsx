import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Outlet } from 'react-router-dom';
import css from './ContactsPage.module.css';
export default function ContactsPage() {
  return (
    <div>
      <h1 className={css.phonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      <ContactList />
      <Outlet />
    </div>
  );
}
