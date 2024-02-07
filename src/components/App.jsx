import React, { Component } from 'react';
import ContactForm from './contactform/ContactForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
    };
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',

          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
      </div>
    );
  }
}
