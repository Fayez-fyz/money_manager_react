import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { useHistory } from 'react-router';

export const Balance = () => {
  const  {transactions}  = useContext(GlobalContext);
  let history = useHistory()

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
    
      <h4>Your Balance</h4>
    <h1>₹{numberWithCommas(total)}</h1>
    </>
  )
}