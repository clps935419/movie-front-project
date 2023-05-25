import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { apiMovies } from "@/api";
import { useEffect, useState } from "react";
import MovieCardTemplate from "@/components/MovieCardTemplate";
import useTableParams from "@/hooks/useTableParams";
import MyPagination from "@/components/Pagination";
import styled from "styled-components";
import { media } from "@/components/styleMediaQuery";

const { getMovies } = apiMovies;

const NodataStyle = styled.div`
  text-align: center;
  font-size: 16px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  > div {
    width: 100%;
  }
  ${media.md`
    >div{
      width: calc(50% - 5px)
    }
  `}
`;
const PageWrapper = styled.div`
  margin: 30px 0;
`;
function MoviesList() {
  const [movieData, setMovieData] = useState([
    {
      id: 1,
      movieCName: "「鬼滅之刃」上弦集結，前進刀匠村",
      imgUrl: "https://picsum.photos/seed/demonSlayer/1920/830",
      inTheatersTime: "2023-05-01T10:21:22.164+00:00",
      movieTime: 90,
      rating: "G",
    },
    {
      id: 2,
      movieCName: "2「鬼滅之刃」上弦集結，前進刀匠村",
      imgUrl: "https://picsum.photos/seed/ya/1920/830",
      inTheatersTime: "2023-05-01T10:21:22.164+00:00",
      movieTime: 90,
      rating: "G",
    },
    {
      id: 3,
      movieCName: "3「鬼滅之刃」上弦集結，前進刀匠村",
      imgUrl: "https://picsum.photos/seed/ya/1920/830",
      inTheatersTime: "2023-05-01T10:21:22.164+00:00",
      movieTime: 90,
      rating: "G",
    },
    {
      id: 4,
      movieCName: "4「鬼滅之刃」上弦集結，前進刀匠村",
      imgUrl: "https://picsum.photos/seed/ya/1920/830",
      inTheatersTime: "2023-05-01T10:21:22.164+00:00",
      movieTime: 90,
      rating: "G",
    },
    {
      id: 5,
      movieCName: "5「鬼滅之刃」上弦集結，前進刀匠村",
      imgUrl: "https://picsum.photos/seed/ya/1920/830",
      inTheatersTime: "2023-05-01T10:21:22.164+00:00",
      movieTime: 90,
      rating: "G",
    },
  ]);
  const [isCurrent, setIsCurrent] = useState(false);
  const [tableParams, setTableParams] = useTableParams();
  const { pageNo, pageSize } = tableParams;
  const AllCardEle = movieData.map((item) => {
    return (
      <MovieCardTemplate
        dataObj={item}
        width={`calc(50% - 5px)`}
        height={`60vh`}
      />
    );
  });
  useEffect(() => {
    console.log("is", isCurrent, pageNo, pageSize);
    handleGetMovies();
    async function handleGetMovies() {
      const {
        data: { data, ...rest },
      } = await getMovies({
        params: {
          isCurrent,
          pageNo,
          pageSize,
        },
      });
      console.log("rest", rest);
      setTableParams((prev) => {
        return {
          ...prev,
          ...rest,
        };
      });
      setMovieData(data);
    }
  }, [isCurrent, pageNo, pageSize]);

  function handleResetTableParams() {
    setTableParams((prev) => {
      return {
        ...prev,
        pageNo: 1,
        pageSize: 10,
        totalCounts: 0,
      };
    });
  }

  return (
    <div className="py-3 px-5">
      {movieData.length > 0 ? (
        <>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="current"
            onSelect={(k) => {
              handleResetTableParams();
              if (k === "current") {
                setIsCurrent(true);
              } else {
                setIsCurrent(false);
              }
            }}
          >
            <div className="d-flex align-items-center justify-content-center mb-5">
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
                <CardWrapper>{AllCardEle}</CardWrapper>
              </Tab.Pane>
              <Tab.Pane eventKey="future">
                <CardWrapper>{AllCardEle}</CardWrapper>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <PageWrapper>
            <MyPagination
              as={PageWrapper}
              tableParams={tableParams}
              setTableParams={tableParams}
            />
          </PageWrapper>
        </>
      ) : (
        <NodataStyle>查無資料</NodataStyle>
      )}
    </div>
  );
}
export default MoviesList;
