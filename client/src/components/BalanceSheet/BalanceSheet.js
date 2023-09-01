import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBalanceSheet } from '../../services/serverData';

// custom class
const balanceSheetStyles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    background: '#007bff',
    color: 'white',
    textAlign: 'center'
  },
  tableCell: {
    padding: '8px',
    borderBottom: '1px solid #ccc',
    textAlign: 'center'
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
};

const BalanceSheet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loanData = location.state;
  const [balanceSheetData, setBalanceSheetData] = useState([]);

  useEffect(() => {
    console.log('loan data =', loanData);
    if (balanceSheetData.length === 0) {
      getBalanceSheet(loanData)
        .then((res) => res.json())
        .then((res) => {
          console.log('res is', res);
          setBalanceSheetData(res.sheet);
          console.log('balance sheet', balanceSheetData);
        });
    }
  });

  const showOutput = () => {
    const consolidatedData = { ...loanData, sheetData: balanceSheetData };
    console.log('consolidated Data=', consolidatedData);
    navigate('/outcome', { state: consolidatedData });
  };

  return (
    <div style={balanceSheetStyles.container}>
      <h1 style={balanceSheetStyles.heading}>Balance sheet data</h1>
      <table style={balanceSheetStyles.table}>
        <tbody>
          <tr style={balanceSheetStyles.tableHeader}>
            <th style={balanceSheetStyles.tableCell}>Year</th>
            <th style={balanceSheetStyles.tableCell}>Month</th>
            <th style={balanceSheetStyles.tableCell}>Profit or Loss</th>
            <th style={balanceSheetStyles.tableCell}>Assets Value</th>
          </tr>
          {balanceSheetData.map((item, i) => (
            <tr key={i}>
              <td style={balanceSheetStyles.tableCell}>{item.year}</td>
              <td style={balanceSheetStyles.tableCell}>{item.month}</td>
              <td style={balanceSheetStyles.tableCell}>{item.profitOrLoss}</td>
              <td style={balanceSheetStyles.tableCell}>{item.assetsValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={showOutput} style={balanceSheetStyles.button}>
        Submit
      </button>
    </div>
  );
};

export default BalanceSheet;
