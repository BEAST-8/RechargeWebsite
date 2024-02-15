// MobileRechargePlans.js
import React from 'react';
import "../css/plan.css";

const MobileRechargePlans = () => {
  const rechargePlans = [
    { id: 1, amount: 10, validity: '7 days', data: '1 GB' },
    { id: 2, amount: 20, validity: '14 days', data: '2 GB' },
    { id: 3, amount: 30, validity: '30 days', data: '3 GB' },
    // Add more plans as needed
  ];

  return React.createElement('div', null,
    React.createElement('h2', null, 'Mobile Recharge Plans'),
    React.createElement('ul', null,
      rechargePlans.map(plan => React.createElement('li', { key: plan.id },
        React.createElement('strong', null, 'Amount:'), ` $${plan.amount} | `,
        React.createElement('strong', null, 'Validity:'), ` ${plan.validity} | `,
        React.createElement('strong', null, 'Data:'), ` ${plan.data}`
      ))
    )
  );
};

export default MobileRechargePlans;
