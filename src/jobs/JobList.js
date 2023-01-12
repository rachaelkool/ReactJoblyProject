import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../SearchForm";
import JobCard from "./JobCard";


function JobList() {

    const [jobs, setJobs] = useState([]);

    useEffect(function getAllJobsOnMount() {
        search();
    }, []);

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    return (
        <div>
            <SearchForm searchFor={search} />
            
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


export default JobList;