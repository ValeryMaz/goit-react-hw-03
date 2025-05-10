import Contact from "../Contact/contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.ul}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.liForContact}>
            <Contact name={name} number={number} onDelete={onDelete} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
}
