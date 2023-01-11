import React from "react";


function JobCard({ title, salary, equity, companyName }) {
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

    return (
        <div>
            <h4>{title}: {companyName}</h4>
            {salary && <p>Salary: {addCommas(salary)}</p>}
            {equity !== undefined && <p>Equity: {equity}</p>}
        </div>

    );
}


export default JobCard;