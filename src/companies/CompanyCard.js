import React from "react";
import { Link } from "react-router-dom";


function CompanyCard({ name, description, handle, logoUrl }) {

    return (
        <Link to={`/companies/${handle}`}>
            <h4>{logoUrl && <img src={logoUrl} alt={name}/>} {name}: {description}</h4>
        </Link>
    );
}


export default CompanyCard;