import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul
      style={{
        listStyle: 'none',
      }}
      className={css.contactList}
    >
      {contacts.map(contact => (
        <ContactListItem
          contact={contact}
          onContactDelete={onContactDelete}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};
const ContactListItem = ({ contact, onContactDelete }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={onContactDelete} value={contact.id}>
        Delete
      </button>
    </li>
  );
};
export default ContactList;
