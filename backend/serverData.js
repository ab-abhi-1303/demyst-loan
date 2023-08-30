const URL = 'http://localhost';
const PORT = '5000';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getAppId = () => {
  return fetch(`${URL}:${PORT}/initializeApplication`, { ...options });
};

export const getBalanceSheet = (data) => {
  return fetch(`${URL}:${PORT}/balanceSheet`, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getDecision = (data) => {
  return fetch(`${URL}:${PORT}/decisionEngine`, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};