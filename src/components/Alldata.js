//alldata.js
import React, { useContext } from "react";
import { Store } from "../AppState/Store";
import Card from "../util/card";
import './background.css';

export default function AllData() {
  const { state } = useContext(Store);

  return (
    <><div className="alldata-background">
      <br />
      <hr className="solid"></hr>
      <h3>ALL DATA</h3>
      <Card
        header="List of all user credentials and balances"
        bgcolor="info"
        body={
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                {/* <th>Balance</th> */}
                {/* <th>Transactions</th> */}
              </tr>
            </thead>
            <tbody>
              {state.users.map((element, index) => (
                <tr key={index} style={{ color: "grey" }}>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  {/* <td>{element.password}</td> */}
                  {/* <td>{element.balance}</td> */}
                  <td>
                    {element.transactions &&
                      element.transactions.map((transaction, index) => (
                        <div key={index}>
                          {transaction.type}: ${transaction.amount.toFixed()}{" "}
                          ({new Date(transaction.date).toLocaleDateString()})
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      />
      <br /></div>
    </>
  );
}
