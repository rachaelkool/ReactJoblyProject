import React, { useState } from "react";


function SearchForm({ searching }) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        searching(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    function handleChange(e) {
        setSearchTerm(e.target.value);
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