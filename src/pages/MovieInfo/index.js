import { apiMovieInfo } from "@/api";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieIntroduction from "./components/MovieIntroduction";
import TimeTable from "./components/TimeTable";
import Trailer from "./components/Trailer";

const { getMovieInfo } = apiMovieInfo;

export default function MovieInfo(params) {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [theaterInfo, setTheaterInfo] = useState([]);
  const sampleMovie = [
    {
      movie: {
        id: "12312412",
        imgUrl: "https://www.vscinemas.com.tw/vsweb/upload/film/film_20230426002.jpg",
        videoUrl: "5gcuGLJN2uU",
        movieCName: "玩命關頭X",
        movieEName: 'FAST X',
        director: "路易斯賴托瑞",
        cast: ["馮迪索", "莎莉賽隆", "布麗拉森", "傑森摩莫亞", "海倫米蘭", "傑森史塔森", "麗塔莫瑞諾", "蜜雪兒羅莉葛茲", "娜塔莉艾曼紐", "喬丹娜布魯斯特", "約翰希南", "麥可魯克", "史考特伊斯威特", "姜成鎬", "丹妮拉梅爾基奧", "泰瑞斯吉布森", "路達克里斯"],
        releaseMovieTime: "2023/05/17",
        movieTime: 141,
        movieLevel: "輔導級",
        synopsis: "迎向終點，就此開始。《玩命關頭X》是《玩命關頭》系列的第十部電影，也為這個影史上最具話題性和最受歡迎的全球系列電影揭開最後的篇章。《玩命關頭》系列現在已經邁入第三個十年，但同樣的核心演員與角色卻仍然和最初一樣火力全開。唐老大（馮迪索 飾）和他的家人這些年來執行過許多看似不可能的任務，以機智、膽量與速度勝過一個個勁敵。而這一次，他們必須面對有史以來最致命的對手：一個與過去有關的可怕威脅，為了雪恨誓言要永遠摧毀這個家庭及唐老大所愛的一切。"
      },
      theater: [
        {
          datetime: "2023-05-25T10:21:22.164+00:00",
          theaterInfo: [
            {
              name: "高雄影城",
              address: "高雄市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '23456789'
                },
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '98765456'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '98765326'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '42156789'
                }
              ]
            },
            {
              name: "台北影城",
              address: "台北市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '4215134554'
                },
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '868742964'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '09876543242'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '87635426780'
                }
              ]
            },
            {
              name: "台南影城",
              address: "台南市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '8678799244'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '79896848291'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '984270942'
                }
              ]
            }
          ]
        },
        {
          datetime: "2023-05-26T10:21:22.164+00:00",
          theaterInfo: [
            {
              name: "高雄影城",
              address: "高雄市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '23456789'
                },
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '98765456'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '98765326'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '42156789'
                }
              ]
            },
            {
              name: "台北影城",
              address: "台北市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '4215134554'
                },
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '868742964'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '09876543242'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '87635426780'
                }
              ]
            },
            {
              name: "台南影城",
              address: "台南市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '8678799244'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '79896848291'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '984270942'
                }
              ]
            }
          ]
        },
        {
          datetime: "2023-05-27T10:21:22.164+00:00",
          theaterInfo: [
            {
              name: "高雄影城",
              address: "高雄市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '23456789'
                },
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '98765456'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '98765326'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '42156789'
                }
              ]
            },
            {
              name: "台北影城",
              address: "台北市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '4215134554'
                },
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '868742964'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '09876543242'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '87635426780'
                }
              ]
            },
            {
              name: "台南影城",
              address: "台南市ＸＸＸＸＸＸ",
              timeInfo: [
                {
                  type: "數位版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '8678799244'
                },
                {
                  type: "3D版",
                  time: "13:20",
                  room: "Ａ",
                  seats: 396,
                  sessionId: '79896848291'
                },
                {
                  type: "3D版",
                  time: "14:30",
                  room: "B",
                  seats: 396,
                  sessionId: '984270942'
                }
              ]
            }
          ]
        },
      ]
    }
  ]
  useEffect(() => {
    (async () => {
      const res = await getMovieInfo({ params: { id: movieId } })
      const result = res.data.data
      console.log('result-movie info:', result)
      // const result = sampleMovie[0]
      setMovieInfo(result.movie);
      setTheaterInfo(result.theaters)
    })();
  }, [])
  return (<>
    <div>
      <div className='bg-dark'>
        <Trailer url={movieInfo.videoUrl} />
      </div>
      <div>
        <MovieIntroduction movieInfo={movieInfo} />
        <TimeTable theaterInfo={theaterInfo} />
      </div>
    </div>
  </>)
};
