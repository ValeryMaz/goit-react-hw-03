import contacts from "../contacts.json";
import { useState, useEffect } from "react";
import ContactList from "./СontactList/contactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import css from "./App.module.css";
function App() {
  const [contactsList, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts) : contacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contactsList));
  }, [contactsList]);

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (id) => {
    setContact((prev) => {
      return prev.filter((d) => d.id !== id);
    });
  };

  const findContact = contactsList.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.div}>
        <h1> Phonebook </h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />

        <ContactList contacts={findContact} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
