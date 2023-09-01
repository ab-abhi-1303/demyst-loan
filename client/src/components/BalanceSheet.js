import React, { useEffect, useState } from 'react';
import './styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { getBalanceSheet } from '../services/serverData';
const BalanceSheet = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const loanData = location.state;
    const [balanceSheetData, setBalanceSheetData] = useState([]);

    useEffect(() => {
        console.log('loan data =', loanData);
        if (balanceSheetData.length === 0) {
            getBalanceSheet(loanData).then(res => res.json()).then((res) => {
                console.log('res is', res);
                setBalanceSheetData(res.sheet);
                console.log('balance sheet', balanceSheetData)
            });
        }
    });

    const showOutput = () => {
        const consolidatedData = {...loanData, sheetData: balanceSheetData};
        console.log('consolidated Data=',consolidatedData);
        navigate('/outcome', {state: consolidatedData})
    }

    return (
        <div>
            <h1>On BalanceSheet page</h1>
            <p>Business name = {loanData.businessName}</p>
            <h1>Balance sheet data</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Profit or Loss</th>
                        <th>Assets Value</th>
                    </tr>
                    {balanceSheetData.map((item, i) => (
                        <tr key={i}>
                            <td>{item.year}</td>
                            <td>{item.month}</td>
                            <td>{item.profitOrLoss}</td>
                            <td>{item.assetsValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={showOutput}>Submit</button>
        </div>
    )
}

export default BalanceSheet;