import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

import { ReactComponent as Location } from '@/assets/icons/location_on_primary.svg';
import { ReactComponent as Confirmation } from '@/assets/icons/confirmation_number_primary.svg';
import { ReactComponent as Schedule } from '@/assets/icons/schedule_primary.svg';
import { ReactComponent as Chair } from '@/assets/icons/chair_primary.svg';
import { ReactComponent as Paid } from '@/assets/icons/paid_primary.svg';
import { ReactComponent as Credit } from '@/assets/icons/credit_card_primary.svg';
import { ReactComponent as Numbers } from '@/assets/icons/numbers_primary.svg';
import { ReactComponent as Available } from '@/assets/icons/event_available_primary.svg';

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
  @media (max-width: 768px) {
    height: 250px;
    -webkit-mask: radial-gradient(circle at 15px 0px, transparent 15px, white 0) -15px / 20%;
    border-radius: 20px;
  }
  background: no-repeat center;
  background-size: cover;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  -webkit-mask: radial-gradient(circle at 10px, transparent 10px, white 0) -10px / 120% 30px;
`;
const Tag = styled.h4`
  @media (max-width: 768px) {
    left: 40px;
    top: 50%;
    transform: translate(0%, -50%);
  }
  @media (min-width: 768px) {
    right: 28px;
    top: 28px;
  }
  border-radius: 30px;
  padding: 8px 20px;
  position: absolute;
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
  const [matches, setMatches] = useState(window.matchMedia('(min-width: 768px)').matches);
  const isPay = tick.payMethod !== '未付款';

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

  useEffect(() => {
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <Card className="row">
      <CardContainer className="col-md-6 col-12">
        <CardTitle>{tick.movieName}</CardTitle>
        <div className="row gy-3">
          <div className="col-md-6 col-12">
            <Location />
            影城：{tick.theaterName}
          </div>
          <div className="col-md-6 col-12">
            <Confirmation />
            時間：{dateTimeStringFormats(tick.movieDatetime)}
          </div>
          <div className="col-md-6 col-12">
            <Schedule />
            票別：{mergedData(tick.ticketType).join(',')}
          </div>
          <div className="col-md-6 col-12">
            <Chair />
            座位：{tick.seats.join(',')}
          </div>
          {openDetail && (
            <>
              <div className="col-md-6 col-12">
                <Paid />
                金額：${tick.price}
              </div>
              <div className="col-md-6 col-12">
                <Credit />
                訂單編號：{tick.orderId}
              </div>
              <div className="col-md-6 col-12">
                <Numbers />
                付款方式：{tick.payMethod}
              </div>
              <div className="col-md-6 col-12">
                <Available />
                訂單時間：{dateTimeStringFormats(tick.orderDatetime)}
              </div>
            </>
          )}
        </div>
      </CardContainer>
      {openDetail && isPay && (
        <div className="col-md-2 col-12 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
          <QRCodeSVG
            className="border border-2 rounded p-3 p-md-1"
            value="https://reactjs.org/"
            size={matches ? 127 : 270}
          />
        </div>
      )}

      <CardImg className="col-12 col-md position-relative pe-0" style={{ backgroundImage: `url(${tick.movieImgUrl})` }}>
        <div
          className={`position-absolute top-50 translate-middle-y circle-arrow ${
            openDetail ? 'circle-close' : 'circle-open'
          }`}
          onClick={handleOpenDetail}
        ></div>
        <Tag className={`${tagClass}`}>{tick.status}</Tag>
      </CardImg>
    </Card>
  );
};

export default TicketCard;
