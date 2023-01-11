import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../SearchForm";


function CompanyList() {

    const [companies, setCompanies] = useState([]);

    useEffect(function getCompaniesOnMount() {
        search();
    }, []);

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    return (
        <div>
            <SearchForm searching={search} />
            <div>
                {companies.map(c => (
                    <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl}
                    />
                ))}
            </div>
        </div>
    );
}


export default CompanyList;
