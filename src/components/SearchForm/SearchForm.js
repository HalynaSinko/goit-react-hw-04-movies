import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import s from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeInput = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (searchQuery.trim() === "") {
      toast.error("Enter query, pleace.");
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmitForm}>
      <input
        className={s.input}
        name="searchQuery"
        value={searchQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter query"
        onChange={handleChangeInput}
      />

      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
