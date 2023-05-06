import { rest } from "msw";

export const handlers = [
  rest.get("/api/auth", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: "suss",
        data: "test",
      })
    );
  }),
  rest.post("/api/user/login", (req, res, ctx) => {
    const { email, password } = req.body;
    if (email !== "test@gmail.com" || password !== "test") {
      return res(
        ctx.status(400),
        ctx.json({
          status: "fail",
          message: "信箱或密碼錯誤",
        })
      );
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: "success",
        data: {
          _id: 123,
          token: "123",
        },
      })
    );
  }),
  rest.post("/api/user/signup", (req, res, ctx) => {
    const { email, password, checkPassword } = req.body;

    if (email === "" || password !== checkPassword) {
      return res(
        ctx.status(400),
        ctx.json({
          status: "fail",
          message: "信箱或密碼格式錯誤",
        })
      );
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: "success",
        data: {
          _id: 123,
          token: "123",
        },
      })
    );
  }),
  rest.post("/api/user/recoverPassword", (req, res, ctx) => {
    const { email } = req.body;

    if (email !== "test@gmail.com") {
      return res(
        ctx.status(400),
        ctx.json({
          status: "fail",
          message: "查無此信箱",
        })
      );
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: "success",
      })
    );
  }),
  rest.get("/api/activity", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: "123123",
            content: "會員出示APP QR Code方享各項優惠折扣",
          },
          {
            id: "511515",
            content: "會員出示APP QR Code方享各項優惠折扣2",
          },
          {
            id: "555444",
            content: "會員出示APP QR Code方享各項優惠折扣3",
          },
          {
            id: "5844814",
            content: "會員出示APP QR Code方享各項優惠折扣4",
          },
          {
            id: "58484",
            content: "會員出示APP QR Code方享各項優惠折扣5",
          },
        ],
        pageNo: 1,
        pageSize: 10,
        pageCounts: 1,
        totalPages: 1,
        totalCounts: 1,
        status: "success",
        message: "error message",
      })
    );
  }),
  rest.get("/api/movies", (req, res, ctx) => {
    const isCurrent = req.url.searchParams.get("isCurrent");
    console.log("🚀 ~ file: handlers.js:122 ~ rest.get ~ req:", isCurrent,typeof isCurrent);

    if (isCurrent === 'true') {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          data: [
            {
              id: "12312412",
              imgUrl: "https://picsum.photos/200/300",
              movieCName: "水行俠",
              movieEName: "ABC",
              director: "程偉豪",
              cast: ["xxx"],
              releaseMovieTime: "2022-03-16",
              movieTime: 125,
              movieLevel: "輔導級",
              synopsis: "測試",
            },
          ],
          status: "success",
          message: "error message",
          pageNo: 1,
          pageSize: 10,
          pageCounts: 1,
          totalPages: 1,
          totalCounts: 1,
        })
      );
    } else {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          data: [
            {
              id: "188181182",
              imgUrl: "https://picsum.photos/200/100",
              movieCName: "鬼滅",
              movieEName: "ABC",
              director: "程偉豪",
              cast: [
                "許光漢",
                "林柏宏",
                "王淨",
                "蔡振南",
                "王滿嬌",
                "庹宗華",
                "馬念先",
              ],
              releaseMovieTime: "2022-03-16",
              movieTime: 125,
              movieLevel: "輔導級",
              synopsis:
                "恐同男警吳明翰 (許光漢 飾) ，誤撿地上紅包，沒想到紅包裡的對象是個男的 (林柏宏 飾) ！被迫男男冥婚的明翰，一路衰到底，不但甩不掉冥婚對象，就連警花林子晴 (王淨 飾) 埋線已久的緝毒案，都被他搞砸。為了挽救危機，恐同又怕鬼的明翰，別無選擇，即使人鬼殊途也要和鬼老公毛毛攜手跨界追兇，一場荒謬絕倫、笑中帶淚的旅程就此展開！",
            },
          ],
          status: "success",
          message: "error message",
          pageNo: 1,
          pageSize: 10,
          pageCounts: 1,
          totalPages: 1,
          totalCounts: 1,
        })
      );
    }
    
  }),
];
