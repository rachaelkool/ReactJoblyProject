import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCard from "../jobs/JobCard";


function CompanyDetail() {
    const { handle } = useParams();

    const [company, setCompany] = useState('');

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    const {name, logoUrl, description, numEmployees, jobs} = company

    if (!jobs) return null;

    return (
        <div>
            <h2>{logoUrl && <img src={logoUrl} alt={name}/>} {name}</h2>
            <h4>{description}</h4>
            <h4># of employees: {numEmployees}</h4>
            <h3>Available jobs:</h3>
            {jobs.map(j => (
            <JobCard
                key={j.id}
                id={j.id}
                title={j.title}
                salary={j.salary}
                equity={j.equity}
                companyName={j.companyName}
            />
            ))}
        </div>
    );
}


export default CompanyDetail;