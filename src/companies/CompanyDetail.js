import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";


function CompanyDetail() {
    const { handle } = useParams();

    const [company, setCompany] = useState('');

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    const {name, logoUrl, description, numEmployees} = company

    return (
        <div>
            <h4>{logoUrl && <img src={logoUrl} alt={name}/>} {name}</h4>
            <p>{description}</p>
            <p># of employees: {numEmployees}</p>
        </div>
    );
}


export default CompanyDetail;