// deposit.js
import React, { useContext, useState } from 'react';
import Card from "../util/card";
import UserContext from "../userContext";
import "../components/deposite.css";

function Deposit() {
    const [show, setShow] = useState(true);
    const [deposit, setDeposit] = useState('');
    const [status, setStatus] = useState('');
    const ctx = useContext(UserContext);
    let lastUser = ctx.users.length - 1;
    let balance = parseInt(ctx.users[lastUser].balance);
    let userName = ctx.users[lastUser].name; // Get the user's name

    function validate(field, label) {
        if (isNaN(deposit) || deposit === " ") {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        if (deposit < 0) {
            setStatus('Error: Negative number');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function makeDeposit() {
        if (!validate(deposit, 'Number Required'))
            return;
        let newAmount = balance + parseInt(deposit);
        let newMoney = `${userName} deposited: ${deposit}`; // Use the user's name
        setShow(false);

        ctx.submissions ??= [];
        ctx.submissions.push(newMoney);
        ctx.users[lastUser].balance = newAmount;
    }

    function clearForm() {
        setDeposit(0);
        setShow(true);
    }

    return (
        <div className='depositebg-container'>
        <div id="deposit">
            <div className="depositCard">
                <br />
                <hr className="solid" />
                <h3>DEPOSIT</h3>
                <Card
                    bgcolor="secondary"
                    header="Deposit Amount"
                    status={status}
                    body={show ? (
                        <>
                            <h5>Welcome you! {userName},</h5> {/* Display the user's name */}
                            <h3>Account Balance =  ₹{ctx.users[lastUser].balance}</h3><br />
                            <input type="input" className="form-control" id="deposit" placeholder="Enter Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /> <br />
                            <button type="submit" className="btn btn-light" disabled={deposit === 0 || deposit === '' ? true : false} onClick={makeDeposit}>Deposit Amount</button> <br />
                        </>
                    ) : (
                        <>
                            <h6>New Balance = $ {balance}</h6> <br />
                            <p>Transaction successful!</p>
                            <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit More...</button> <br />
                        </>
                    )
                    }
                />
            </div>
        </div>
        </div>
    )
}
export default Deposit;
