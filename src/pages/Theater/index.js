import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiTheater } from '@/api';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

const { getTheater } = apiTheater;

const Theater = () => {
  const navigate = useNavigate();
  const [theater, setTheater] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    getTheater(id)
      .then(({ data }) => setTheater(data.data))
      .catch(() => navigate('/member'));
  }, [id, navigate]);

  if (!!!theater) return <></>;

  return (
    <div className="container mb-5 mt-3">
      <section className="row mb-5">
        <Image className="col-5" fluid src={theater.imgUrl} />
        <div className="col">
          <div className="mb-3">
            <h2>{theater.name}</h2>
            <p>
              地址：{theater.address}
              <br />
              電話：{theater.phone}
              <br />
              廳數：{theater.rooms} 廳
              <br />
            </p>
          </div>
          <p>{theater.description}</p>
        </div>
      </section>

      <section className="mb-5">
        <h3>交通位置</h3>
        <div className="row">
          <div className="col-5">
            <iframe title="map" className="w-100" src={theater.mapUrl} height={300} loading="lazy"></iframe>
          </div>
          <ul className="col">
            {theater.traffic.split(';').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h3>票價資訊</h3>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>全票</th>
              <th>優待票</th>
              <th>團體票</th>
              <th>敬老票</th>
              <th>愛心票</th>
              <th>早場票</th>
            </tr>
          </thead>
          <tbody>
            {theater.ticketPriceInfo.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.type}</td>
                <td>{ticket['全票'] || '未販售'}</td>
                <td>{ticket['優待票'] || '未販售'}</td>
                <td>{ticket['團體票'] || '未販售'}</td>
                <td>{ticket['敬老票'] || '未販售'}</td>
                <td>{ticket['愛心票'] || '未販售'}</td>
                <td>{ticket['早場票'] || '未販售'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Theater;
