import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 40px;
  border-radius: 20px;
  border: 1px solid #b7b7b7;
`;
const CardContainer = styled.div`
  padding: 40px 0px 40px 48px;
  color: #767373;
`;
const CardTitle = styled.h3`
  margin-bottom: 32px;
  color: #000000;
`;
const CardImg = styled.div`
  background: no-repeat center;
  background-size: cover;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  -webkit-mask: radial-gradient(circle at 10px, transparent 10px, white 0) -10px / 120% 30px;
`;
const Tag = styled.h4`
  border-radius: 30px;
  padding: 8px 20px;
  position: absolute;
  top: 28px;
  right: 28px;
  line-height: 36px;
`;

const dateTimeStringFormats = (dateTime) => dateTime.replace('T', ' ').split('.')[0];

const mergedData = (data) =>
  data.reduce((result, ticket) => {
    const existingTicket = result.find((item) => item.startsWith(ticket));
    if (existingTicket) {
      let count = Number(existingTicket.split('*')[1]);
      if (isNaN(count)) count = 1;
      const updatedTicket = `${ticket}*${count + 1}`;
      result[result.indexOf(existingTicket)] = updatedTicket;
    } else {
      result.push(ticket);
    }
    return result;
  }, []);

const TicketCard = ({ tick }) => {
  const [openDetail, setOpenDetail] = useState(false);

  let tagClass = '';
  switch (tick.status) {
    case '未取票':
      tagClass = 'tag-notPickUp';
      break;
    case '已取票':
      tagClass = 'tag-pickUp';
      break;
    case '已退票':
      tagClass = 'tag-refunded';
      break;
    default:
      tagClass = 'tag-unpaid';
  }

  const handleOpenDetail = () => {
    setOpenDetail((pre) => !pre);
  };

  return (
    <Card className="row">
      <CardContainer className="col-6">
        <CardTitle>{tick.movieName}</CardTitle>
        <div className="row gy-3">
          <div className="col-6">影城：{tick.theaterName}</div>
          <div className="col-6">時間：{dateTimeStringFormats(tick.movieDatetime)}</div>
          <div className="col-6">票別：{mergedData(tick.ticketType).join(',')}</div>
          <div className="col-6">座位：{tick.seats.join(',')}</div>
          {openDetail && (
            <>
              <div className="col-6">金額：${tick.price}</div>
              <div className="col-6">訂單編號：{tick.orderId}</div>
              <div className="col-6">付款方式：{tick.payMethod}</div>
              <div className="col-6">訂單時間：{dateTimeStringFormats(tick.orderDatetime)}</div>
            </>
          )}
        </div>
      </CardContainer>
      {openDetail && (
        <div className="col-2 d-flex align-items-center justify-content-center">
          <QRCodeSVG className="border border-2 rounded p-1" value="https://reactjs.org/" size={127} />
        </div>
      )}

      <CardImg className="col position-relative pe-0" style={{ backgroundImage: `url(${tick.imgUrl})` }}>
        <div className="position-absolute top-50 translate-middle" onClick={handleOpenDetail}>
          <div className={`circle-arrow ${openDetail ? 'circle-lift' : 'circle-right'}`}></div>
        </div>
        <Tag className={`${tagClass}`}>{tick.status}</Tag>
      </CardImg>
    </Card>
  );
};

export default TicketCard;
