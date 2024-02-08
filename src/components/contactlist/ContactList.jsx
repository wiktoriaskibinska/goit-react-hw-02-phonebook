import React from 'react';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul
      style={{
        listStyle: 'none',
      }}
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
