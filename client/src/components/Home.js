import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    const performRedirect = () => {
        navigate('/loan-details');
    }

    return (
        <div>
            <h1>On Home page</h1>
            <button onClick={performRedirect}>Click to Apply for Loan</button>
        </div>
    )
}

export default Home;