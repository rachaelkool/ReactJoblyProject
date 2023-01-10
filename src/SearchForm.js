import React, { useState } from "react";


function SearchForm({ searching }) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        searching(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="searchTerm"
                    placeholder="search here"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Search!</button>
            </form>
        </div>
    );
}


export default SearchForm;