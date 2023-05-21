import React from 'react';
import TicketCard from './components/TicketCard';

import '@/assets/scss/member/purchaseRecord.scss';

const ticks = [
  {
    movieName: '灌籃高手 | THE FIRST SLAM DUNK',
    theaterName: '台北影城',
    movieDatetime: '2023-05-01T10:21:22.164Z',
    ticketType: ['爆米花套票', '爆米花套票', '全票'],
    seats: ['8排7', '8排8'],
    price: 740,
    orderId: '0f031e87fdac4931b239',
    payMethod: '未付款',
    orderDatetime: '2023-05-11T01:29:41.898Z',
    status: '未取票',
    imgUrl:
      'https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    movieName: '灌籃高手 | THE FIRST SLAM DUNK',
    theaterName: '台北影城',
    movieDatetime: '2023-05-01T10:21:22.164Z',
    ticketType: ['爆米花套票', '爆米花套票'],
    seats: ['8排7', '8排8'],
    price: 740,
    orderId: '0f031e87fdac4931b239',
    payMethod: '未付款',
    orderDatetime: '2023-05-11T01:29:41.898Z',
    status: '已取票',
    imgUrl:
      'https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    movieName: '灌籃高手 | THE FIRST SLAM DUNK',
    theaterName: '台北影城',
    movieDatetime: '2023-05-01T10:21:22.164Z',
    ticketType: ['爆米花套票', '爆米花套票'],
    seats: ['8排7', '8排8'],
    price: 740,
    orderId: '0f031e87fdac4931b239',
    payMethod: '未付款',
    orderDatetime: '2023-05-11T01:29:41.898Z',
    status: '已退票',
    imgUrl:
      'https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const PurchaseRecord = () => {
  return (
    <div>
      {ticks.map((tick) => (
        <TicketCard tick={tick} />
      ))}
    </div>
  );
};

export default PurchaseRecord;
