import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.divForSearch}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
