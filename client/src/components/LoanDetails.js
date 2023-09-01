import React, { useEffect, useState } from 'react';
import { getAppId } from '../services/serverData';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoanDetails = () => {
    const navigate = useNavigate();
    const [applicationToken, setApplicationToken] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        getAppId().then((data) => data.json())
            .then(res => setApplicationToken(res.appId));
    }, []);

    const onSubmit = (formData) => {
        console.log("Submitted data is:", formData);

        const data = {
            token: applicationToken,
            businessName: formData.name,
            year: formData.year,
            loanAmount: formData.loanAmount,
            accountingProvider: formData.provider,
        };
        console.log('data sent =', data)
        navigate('/balance-sheet', {state : data});
    };

    return applicationToken ? (
        <div>
            <h1>On LoanDetails page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <p>Name is required</p>}

                <label>Year</label>
                <input type="number" {...register("year", { required: true, min: 1, max: 2023 })} />
                {errors.year && <p>Year is required</p>}

                <label>Loan Amount</label>
                <input type="number" {...register("loanAmount", { required: true })} />
                {errors.loanAmount && <p>Loan Amount is required</p>}

                <select {...register("provider")}>
                    <option value="Xero">Xero</option>
                    <option value="MYOB">MYOB</option>
                </select>
                <button type="submit">Review Details</button>
            </form>
        </div>
    ) : <h1>Loading...</h1>
}

export default LoanDetails;
