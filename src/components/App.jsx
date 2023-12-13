import { GlobalStyle } from '../global-style';
import { AddContact } from './newContact/NewContact';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

export const App = () => {

const filter = useSelector(state => state.filter.filter);

const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts") ?? [];

    if (savedContacts.length !== 0) {
      const parsedContacts = JSON.parse(savedContacts);
      console.log(parsedContacts);
      return(parsedContacts);
    } else if (savedContacts.length === 0) {
      return ([]);
    };
});
// const [filters, setFilter] = useState('');

useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts])

const createContact = (values) => {
  const targetContact = contacts
    .map((cont) => cont.name.toLowerCase())
    .includes(values.name.toLowerCase());

    if (targetContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      values.id = nanoid();
      setContacts(prevState => [...prevState, values]);
    };  
};

// const changeFilter = searchValue => {
//   setFilter(searchValue.target.value);
// }

const handleDelete = (contactId) => {
  setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
};

const actualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <GlobalStyle />
      <AddContact create={createContact} />
      <div>
        {/* <Filter onFilter={changeFilter} initValue={filters}/> */}
        <Filter />
        <ContactList actual={actualContacts} onDelete={handleDelete}/>
      </div>
    </>
  );
};