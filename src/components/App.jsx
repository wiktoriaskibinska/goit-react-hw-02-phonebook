import React, { Component } from 'react';
import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  /* this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));*/
  addContact = contact => {
    const isInContactsList = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContactsList) {
      alert(`${contact.name} is already in contact list`);
    } else {
      this.setState(prevState => ({
        contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
      }));
    }
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.target.value });
    console.log(this.state.filter);
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    console.log(normalizedFilter);
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onContactDelete = evt => {
    const idToDelete = evt.target.value;
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idToDelete),
      };
    });
  };

  /* getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase;
    console.log(normalizedFilter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };*/

  render() {
    const visibleContacts = this.getVisibleContacts();
    console.log(visibleContacts);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',

          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          {' '}
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter onFilterChange={this.onFilterChange} />
        </div>
        <div>
          <ContactList
            contacts={visibleContacts}
            onContactDelete={this.onContactDelete}
          />
        </div>
      </div>
    );
  }
}
