import React, { useEffect, useState } from 'react';
import TicketCard from './components/TicketCard';
import { apiUser } from '@/api';
import '@/assets/scss/member/purchaseRecord.scss';

const { getPurchaseRecord } = apiUser;

const PurchaseRecord = () => {
  const [ticks, setTicks] = useState([]);
  useEffect(() => {
    getPurchaseRecord().then(({ data }) => setTicks(data.data));
  }, []);

  return (
    <div>
      {ticks.map((tick) => (
        <TicketCard tick={tick} key={tick.orderId} />
      ))}
    </div>
  );
};

export default PurchaseRecord;
