import { useState, useEffect } from 'react';
import { apiTheater } from '@/api';

import TheaterCard from './components/TheaterCard';

const { getTheaters } = apiTheater;

const TheaterList = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    getTheaters().then(({ data }) => setTheaters(data.data));
  }, []);

  return (
    <div className="container mb-5 mt-3">
      <div className="row gy-3">
        {theaters.map((theater, index) => (
          <div className="col-md-4 col-12" key={index}>
            <TheaterCard theater={theater} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheaterList;
