import React from 'react';
import './Home.css';
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    const performRedirect = () => {
        navigate('/loan-details');
    }

    return (
        <div className='container'>
            <h1>Welcome To Demyst Loan App</h1>
            <img src={logo} alt='logo' height={500} width={500}/>
            <button onClick={performRedirect}>Click here to Apply</button>
        </div>
    )
}

export default Home;