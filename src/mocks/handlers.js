import _ from 'lodash';
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
    console.log("🚀 ~ file: handlers.js:122 ~ rest.get ~ req:", isCurrent, typeof isCurrent);

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
  rest.get("/api/movies/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "success",
        data: {
          "movie": {
            id: "12312412",
            imgUrl: "img_url",
            videoUrl: "videoUrl",
            movieCName: "鬼滅",
            movieEName: 'ABC',
            "director": "程偉豪",
            "cast": ["許光漢", "林柏宏", "王淨", "蔡振南", "王滿嬌", "庹宗華", "馬念先"],
            releaseMovieTime: "2022-03-16",//"20220316", //上映時間
            movieTime: 125,//"2時05分", //片長
            movieLevel: "輔導級",
            "synopsis": "恐同男警吳明翰 (許光漢 飾) ，誤撿地上紅包，沒想到紅包裡的對象是個男的 (林柏宏 飾) ！被迫男男冥婚的明翰，一路衰到底，不但甩不掉冥婚對象，就連警花林子晴 (王淨 飾) 埋線已久的緝毒案，都被他搞砸。為了挽救危機，恐同又怕鬼的明翰，別無選擇，即使人鬼殊途也要和鬼老公毛毛攜手跨界追兇，一場荒謬絕倫、笑中帶淚的旅程就此展開！"
          }
        },
        "theater": [
          {
            "datetime": "2023/02/10",
            "theaterInfo": [
              {
                "name": "高雄ＸＸ影城",
                "address": "高雄市ＸＸＸＸＸＸ",
                "timeInfo": [
                  {
                    "type": "數位版",
                    "time": "13:20",
                    "room": "Ａ",
                    "seats": 396
                  },
                  {
                    "type": "數位版",
                    "time": "14:30",
                    "room": "B",
                    "seats": 396
                  }
                ]
              },
              {
                "name": "台南ＸＸ影城",
                "address": "台南市ＸＸＸＸＸＸ",
                "timeInfo": [
                  {
                    "type": "數位版",
                    "time": "13:20",
                    "room": "Ａ",
                    "seats": 396
                  },
                  {
                    "type": "數位版",
                    "time": "14:30",
                    "room": "B",
                    "seats": 396
                  }
                ]
              }
            ]
          }
        ]
      })
    );
  }),
  rest.get("/api/sessions/:id/ticketTypes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          "status": "Success",
          "data": [
            {
              "id": "",
              "type": "套票",
              "name": "雙人及拿套票",
              "price": 560,
              "content": "內含：......",
              "ticketCount": 2
            },
            {
              "id": "",
              "type": "電影票",
              "name": "個人及拿套票",
              "price": 280,
              "content": "內含：......",
              "ticketCount": 1
            }
          ]
        }
      )
    )
  }),
  rest.get("/api/sessions/:id/seats", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          "status": "success",
          "data": [
            {
              "_id": "6468913ebf17660357f73aa1",
              "x": 1,
              "y": 1,
              "row": 1,
              "col": 1,
              "situation": "可販售",
              "isSold": false
            }
          ]
        }
      )
    )
  }),
  rest.post("/api/sessions/:id/seats", (req, res, ctx) => {
    const { ticketCount, seats } = req.body;
    if (!_.isEmpty(ticketCount) || !_.isEmpty(seats)) {
      return res(
        ctx.status(400),
        ctx.json({
          status: "fail",
          message: "座位資訊有誤",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        "status": "success",
        "data": [
          {
            "_id": "646899fdc4052e100cf012ac",
            "x": 7,
            "y": 8,
            "col": 7,
            "row": 8,
            "situation": "可販售",
            "isSold": false
          },
          {
            "_id": "646899fdc4052e100cf01366",
            "x": 20,
            "y": 13,
            "col": 20,
            "row": 13,
            "situation": "可販售",
            "isSold": true
          },
          {
            "_id": "646899fdc4052e100cf01367",
            "x": 20,
            "y": 14,
            "col": 20,
            "row": 14,
            "situation": "不可販售",
            "isSold": false
          },
          {
            "_id": "646899fdc4052e100cf01368",
            "x": 20,
            "y": 15,
            "col": 20,
            "row": 15,
            "situation": "保留位",
            "isSold": false
          }
        ]
      })
    )
  }),
  // rest.post("/api/booking/result", (req, res, ctx) => {
  // }),
  rest.post("/api/booking", (req, res, ctx) => {
    const { sessionId, ticketTypeIds, seats, price } = req.body;
    if (_.isEmpty(sessionId) || _.isEmpty(ticketTypeIds) || _.isEmpty(seats) || _.isEmpty(price)) {
      return res(
        ctx.status(400),
        ctx.json({
          status: "fail",
          message: "訂票資訊有誤",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        "status": "success",
        "data": {
          "MerchantID": "3002607",
          "MerchantTradeNo": "735a26af586e4a0abfd6",
          "MerchantTradeDate": "05/10/2023, 23:22:06",
          "PaymentType": "aio",
          "TotalAmount": "740",
          "TradeDesc": "我是商品描述",
          "ItemName": "爆米花套票#爆米花套票",
          "ReturnURL": "https://expresstestserver.onrender.com/OrderOK",
          "ChoosePayment": "ALL",
          "EncryptType": "1",
          "ClientBackURL": "http://localhost:3000/ecpayTest",
          "CheckMacValue": "BE8ACCBAFB0360BBF4DC0AB0D90B80A0D3D489C000680419D98D5968263CB8BA"
        }
      })
    )
  }),

  rest.post("/api/booking/rePay/:orderId", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          "status": "success",
          "data": {
            "MerchantID": "3002607",
            "MerchantTradeNo": "735a26af586e4a0abfd6",
            "MerchantTradeDate": "05/10/2023, 23:22:06",
            "PaymentType": "aio",
            "TotalAmount": "740",
            "TradeDesc": "我是商品描述",
            "ItemName": "爆米花套票#爆米花套票",
            "ReturnURL": "https://expresstestserver.onrender.com/OrderOK",
            "ChoosePayment": "ALL",
            "EncryptType": "1",
            "ClientBackURL": "http://localhost:3000/ecpayTest",
            "NeedExtraPaidInfo": "N",
            "CheckMacValue": "BE8ACCBAFB0360BBF4DC0AB0D90B80A0D3D489C000680419D98D5968263CB8BA"
          }
        }
      )
    )
  }),
];
