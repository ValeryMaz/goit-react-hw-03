import css from "./contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
