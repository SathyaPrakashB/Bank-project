//withdraw.js
import React, { useContext, useState } from 'react';
import UserContext from "../userContext";
import "../components/withdraw.css";

function Withdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [status, setStatus] = useState('');
    const ctx = useContext(UserContext);

    const handleWithdraw = () => {
        if (withdrawAmount === '') {
            setStatus('Please enter an amount to withdraw.');
            return;
        }
        const amount = parseFloat(withdrawAmount); // Parse as float
        if (isNaN(amount) || amount <= 0) {
            setStatus('Please enter a valid positive number.');
            return;
        }
        const lastUserIndex = ctx.users.length - 1;
        const balance = parseFloat(ctx.users[lastUserIndex].balance);
        if (amount > balance) {
            setStatus('Insufficient balance for withdrawal.');
            return;
        }
        const newAmount = balance - amount;
        ctx.users[lastUserIndex].balance = newAmount.toString(); // Convert back to string for consistency
        setStatus(`Withdrawal of ₹${amount} successful.`);
        setWithdrawAmount('');
    };

    return (
        <div className='withdrawbg-container'>
        <div id="withdraw">
            <div id="withdrawCard">
                <hr className="solid" />
                <h1>Withdraw Amount</h1>
                <h3>Account Balance= ₹{ctx.users.length > 0 ? ctx.users[ctx.users.length - 1].balance : 0}</h3>
                <div>
                    <label htmlFor="withdrawAmount">Amount to Withdraw:</label>
                    <input
                        type="number"
                        id="withdrawAmount"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                    />
                </div>
                <button onClick={handleWithdraw}>Withdraw</button>
                {status && <p>{status}</p>}
            </div>
        </div>
        </div>
    );
}

export default Withdraw;
