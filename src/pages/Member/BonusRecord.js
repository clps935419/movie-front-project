import React from 'react';

const bonusData = {
  orders: [
    {
      theaterName: '台北影城', //影城名稱
      orderNumber: '123456', //訂單編號
      orderDate: '2023-05-11T01:29:41.898Z', //訂單時間
      bonus: 40, //點數
    },
    {
      theaterName: '台北影城', //影城名稱
      orderNumber: '1234567', //訂單編號
      orderDate: '2023-05-11T01:29:41.898Z', //訂單時間
      bonus: 40, //點數
    },
    {
      theaterName: '台北影城', //影城名稱
      orderNumber: '1234568', //訂單編號
      orderDate: '2023-05-11T01:29:41.898Z', //訂單時間
      bonus: 40, //點數
    },
    {
      theaterName: '台北影城', //影城名稱
      orderNumber: '1234569', //訂單編號
      orderDate: '2023-05-11T01:29:41.898Z', //訂單時間
      bonus: 40, //點數
    },
    {
      theaterName: '台北影城', //影城名稱
      orderNumber: '12345610', //訂單編號
      orderDate: '2023-05-11T01:29:41.898Z', //訂單時間
      bonus: 40, //點數
    },
    {
      theaterName: '台北影城', //影城名稱
      orderNumber: '12345611', //訂單編號
      orderDate: '2023-05-11T01:29:41.898Z', //訂單時間
      bonus: 40, //點數
    },
  ],
  bonus: 100,
  expire: {
    bonus: 10,
    date: '2023/12/31',
  },
};

const BonusRecord = () => {
  return (
    <div className="row gap-5">
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
        {bonusData.orders.map((order) => (
          <div className="d-flex justify-content-around" key={order.orderNumber}>
            <p>
              <span className="fw-bold">消費：{order.theaterName}</span>
              <span className="ps-4 text-secondary">{order.orderDate.replace('T', ' ').split('.')[0]}</span>
            </p>
            <p className="fw-bold">P{order.bonus}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusRecord;
