import { apiTheater } from '@/api';
import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MovieVersion from "./MovieVersion";
const { getTheaters } = apiTheater;
export default function TimeTable({ theaterInfo }) {
  const [selectionDates, setSelectionDates] = useState([]);
  const [selectionLocations, setSelectionLocations] = useState([]);
  const [datetime, setDatetime] = useState("");
  const [location, setLocation] = useState("");
  const [timetableInfo, setTimetableInfo] = useState([]);
  useEffect(() => {
    setSelectionDates(theaterInfo.map(item => { return item[0].datetime }));
  }, [theaterInfo]);
  useEffect(() => {
    const getAllTheaters = async () => {
      try {
        const theaters = await getTheaters()
        setSelectionLocations(theaters.data.data.map(theater => { return theater.name }));
      } catch (error) {
        console.error(error)
      }
    }
    getAllTheaters();
  }, [theaterInfo]);
  const weekday = {
    0: '週日',
    1: '週一',
    2: '週二',
    3: '週三',
    4: '週四',
    5: '週五',
    6: '週六',
  }
  function handleSelectDatetime(e) {
    setDatetime(e.target.value);
    setLocation('all');
  }
  function handleSelectLocation(e) {
    setLocation(e.target.value)
  }

  useEffect(() => {
    let tempTimetablesInfos = [];
    if (datetime) {
      tempTimetablesInfos = theaterInfo.find(item => new Date(item[0].datetime).toLocaleDateString() === new Date(datetime).toLocaleDateString());
    }
    if (location && location !== 'all') {
      let result = tempTimetablesInfos.find(item => item.name === location);
      tempTimetablesInfos = result ? [result] : null;
    }
    setTimetableInfo(tempTimetablesInfos);
  }, [datetime, location, theaterInfo]);
  return (<>
    <Container className="mb-5">
      <Form className="mb-5">
        <Row>
          <Col xs={6} md={5}>
            <Form.Group>
              <Form.Select value={datetime} onChange={handleSelectDatetime}>
                <option>選擇日期</option>
                {selectionDates.map((date, index) => (
                  <option key={`${date}-${index}`} value={date}>{new Date(date).toLocaleDateString()}&emsp;
                    {new Date(date).toLocaleDateString() === new Date(Date.now()).toLocaleDateString() ? '當日' : weekday[new Date(date).getDay()]}
                  </option>))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Select value={location} onChange={handleSelectLocation}>
                <option>選擇區域</option>
                <option value="all">全部區域</option>
                {selectionLocations.map(theater => (
                  <option key={theater} value={theater}>{theater}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <div>
        {timetableInfo &&
          timetableInfo.map((area, index) => (
            <div key={area.name}>
              {index !== 0 && <hr />}
              <div className="d-flex gap-3">
                <p className='fs-1 fw-semibold'>{area.name}</p>
                <p className="fs-6 text-muted py-3">{area.address}</p>
              </div>
              <MovieVersion timeInfos={area.timeInfo} />
            </div>
          ))
        }
      </div>
      <div>
        {
          !timetableInfo &&
          <p>此影城無上映。</p>
        }
      </div>
    </Container>
  </>)
};
