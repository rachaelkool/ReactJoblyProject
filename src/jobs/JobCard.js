import React, { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";


function JobCard({ title, salary, equity, companyName, id}) {
    function addCommas(num) {
        if (typeof num !== 'number') {
            return 'invalid input';
        }
    
        let addNegativeSign = false;
        let arr = num.toString().split('');
    
        if (arr[0] === '-') {
            arr.shift();
            addNegativeSign = true;
        }
        if (arr.length < 4) {
            return arr.join('');
        }
        for (let i = arr.length-3; i > 0; i - 3) {
            arr.splice(i, 0, ',');
            i = i - 3;
        }
        return addNegativeSign ? '-' + arr.join('') : arr.join('');
    }

    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState(false);

    useEffect(function updateAppliedStatus() {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    async function handleApply() {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    return (
        <div>
            <p><b>{title}</b></p>
            {companyName && <p>Company: {companyName}</p>}
            {salary && <p>Salary: {addCommas(salary)}</p>}
            {equity !== undefined && <p>Equity: {equity}</p>}

            <button onClick={handleApply} disabled={applied}>
            {applied ? "Applied" : "Click to Apply"}
            </button>
        </div>
    );
}


export default JobCard;