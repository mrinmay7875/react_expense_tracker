import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  let { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            amount={transaction.amount}
            text={transaction.text}
            id={transaction.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
