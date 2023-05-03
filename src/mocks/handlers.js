import { rest } from 'msw';

export const handlers = [
  rest.get('/api/auth', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: 'suss',
        data: 'test',
      })
    );
  }),
  rest.post('/api/user/singin', (req, res, ctx) => {
    const { email, password } = req.body;

    if (email !== 'test@gmail.com' && password !== 'test') {
      return res(
        ctx.status(400),
        ctx.json({
          status: 'fail',
          message: '信箱或密碼錯誤',
        })
      );
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: 'success',
      })
    );
  }),
  rest.post('/api/user/singup', (req, res, ctx) => {
    const { email, password, checkPassword } = req.body;

    if (email === '' || password !== checkPassword) {
      return res(
        ctx.status(400),
        ctx.json({
          status: 'fail',
          message: '信箱或密碼格式錯誤',
        })
      );
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: 'success',
      })
    );
  }),
  rest.post('/api/user/recoverPassword', (req, res, ctx) => {
    const { email } = req.body;

    if (email !== 'test@gmail.com') {
      return res(
        ctx.status(400),
        ctx.json({
          status: 'fail',
          message: '查無此信箱',
        })
      );
    }

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        status: 'success',
      })
    );
  }),
];
