import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDecision } from '../../services/serverData';
import './Outcome.css'
import success from '../../assets/success.jpg';

const Outcome = () => {
    const location = useLocation();
    const consolidatedData = location.state;
    const [outcome, setOutcome] = useState(null);

    useEffect(() => {
        getDecision(consolidatedData)
            .then(res => res.json())
            .then(data => {
                console.log('final decision:', data);
                setOutcome(data);
            });
    }, [consolidatedData]);

    function calculate() {
        const total = consolidatedData.sheetData.reduce(function (acc, curr) {
            acc = acc + curr.profitOrLoss;
            return acc;
        }, 0);
        return total;
    }

    return outcome ? (
        <div className="card">
            <h1>On Outcome page</h1>
            <img src={success} alt='successimage' height={200}/>
            <p><strong>Outcome:</strong> {outcome.outcome}</p>
            <p><strong>Business Name: </strong>{consolidatedData.businessName} </p>
            <p><strong>Year Established: </strong>{consolidatedData.year} </p>
            <p><strong>Summary of Profit/Loss: </strong> {calculate()} </p>
            <p><strong>Pre Assessment value: </strong>{outcome.preAssessmentValue}</p>
            <p><strong>Approved amount: </strong> {outcome.approvedAmount}</p>

        </div>
    ) : <h1>Loading...</h1>
}

export default Outcome;