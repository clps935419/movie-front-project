import React, { useState, useEffect } from 'react';
import { apiUser } from '@/api';

const { getBonusRecord } = apiUser;

const initBonusData = {
  orders: [],
  bonus: 0,
  expire: {
    bonus: 0,
    date: '',
  },
};

const BonusRecord = () => {
  const [bonusData, setBonusData] = useState(initBonusData);

  useEffect(() => {
    getBonusRecord({ params: { page: 1, limit: 10 } }).then(({ data }) => setBonusData(data.data));
  }, []);

  let orderDetail = <p>無購票資訊</p>;

  if (bonusData.orders.length > 0) {
    orderDetail = bonusData.orders.map((order) => (
      <div className="d-flex justify-content-around" key={order.orderNumber}>
        <p>
          <span className="fw-bold">消費：{order.theaterName}</span>
          <span className="ps-4 text-secondary">{order.orderDate.replace('T', ' ').split('.')[0]}</span>
        </p>
        <p className="fw-bold">P{order.bonus}</p>
      </div>
    ));
  }

  return (
    <div className="row gap-5 mb-5">
      <div className="border border-2 rounded text-center col-3 offset-1 h-100 d-flex flex-column justify-content-center py-5">
        <h3>會員點數</h3>
        <p>
          共<span className="h3 px-2 text-primary">{bonusData.bonus}</span>點
        </p>
        <p className="mb-0">
          其中{bonusData.expire.bonus}點將於{bonusData.expire.date}過期
        </p>
      </div>
      <div className="border border-2 rounded text-center col-7 h-100 d-flex flex-column justify-content-center pt-2">
        {orderDetail}
      </div>
    </div>
  );
};

export default BonusRecord;
