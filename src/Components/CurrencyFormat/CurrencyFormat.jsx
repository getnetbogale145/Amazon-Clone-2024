// import React from "react";
// import numeral from "numeral";


// const CurrencyFormat = ({ amount }) => {
//   const formattedAmount = numeral(amount).format("$0,0.00");
//   return <div>{formattedAmount} </div>;
// };
// export default CurrencyFormat;


import React from 'react';
import PropTypes from 'prop-types';

function CurrencyFormat({ amount }) {
  return (
    <span>${amount.toFixed(2)}</span>
  );
}

CurrencyFormat.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default CurrencyFormat;
