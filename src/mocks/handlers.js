import { rest } from 'msw';

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
        status: 'success',
        data: {
          _id: 123,
          token: '123',
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
        status: 'success',
        data: {
          _id: 123,
          token: '123',
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
];
