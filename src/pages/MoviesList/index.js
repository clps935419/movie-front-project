import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { apiMovies } from "@/api";
import { useEffect, useState } from "react";
import CardTemplate from "./components/CardTemplate";

const {getMovies } = apiMovies;

function MoviesList() {
  const [currentDataArr, setCurrentDataArr] = useState([]);
  const [futureDataArr, setFutureDataArr] = useState([]);
  const [key, setKey] = useState("current");

  useEffect(()=>{
    handleGetAllMovies();
  },[])
  
  async function handleGetMovies({isCurrent}){
    const res = await getMovies({
      params:{
        isCurrent
      }
    });
    const {data:{data}} = res;
    return data;
  }
  async function handleGetAllMovies(){
    const promises = [
      handleGetMovies({ isCurrent: true }),
      handleGetMovies({ isCurrent: false }),
    ];
    Promise.all(promises).then((arr) => {
      console.log("arr",arr);
      setCurrentDataArr(arr[0]);
      setFutureDataArr(arr[1]);
    }).catch(e=>{
      console.log('e',e)
    });
  }

  return (
    <div className="py-3 px-5">
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="current"
        onSelect={(k) => setKey(k)}
      >
        <div className="d-flex align-items-center justify-content-center mb-3">
          <Nav
            variant="pills"
            className="d-flex align-items-center justify-content-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="current">現正熱映</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="future">即將上映</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="current">
            {currentDataArr.map((item) => {
              return (
                <CardTemplate
                  img={item.imgUrl}
                  title={item.movieCName}
                  content={item.synopsis}
                />
              );
            })}
          </Tab.Pane>
          <Tab.Pane eventKey="future">
            {futureDataArr.map((item) => {
              return (
                <CardTemplate
                  img={item.imgUrl}
                  title={item.movieCName}
                  content={item.synopsis}
                />
              );
            })}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
export default MoviesList;
