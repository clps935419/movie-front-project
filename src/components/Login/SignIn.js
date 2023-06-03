import { apiUser } from '@/api';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { setAuth } from '../../store/slice/authSlice';
import LoginContext from './store/LoginContext';

const { postLogin } = apiUser;

const SignIn = ({ closeModal }) => {
  const dispatch = useDispatch();

  const context = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await postLogin({ data }).then(({ data }) => {
      if (data.status === 'success') {
        const { _id, email, token } = data.data;
        dispatch(setAuth({ uid: _id, email, token, time: '20000' }));
        closeModal();
        toast(`登入成功!`, {
          type: 'success',
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-header">
        <h5 className="modal-title">會員登入</h5>
        <button type="button" className="btn-close" onClick={closeModal}></button>
      </div>
      <div className="modal-body">
        <div className="row mb-3">
          <label htmlFor="email" className="col-3 col-form-label">
            Email
          </label>
          <div className="col-9">
            <input
              id="email"
              {...register('email', { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.com$/ })}
              className="form-control"
            />
            {errors?.email?.type === 'required' && <p className="text-danger mb-0 mt-1">信箱必填</p>}
            {errors?.email?.type === 'pattern' && <p className="text-danger mb-0 mt-1">信箱格式錯誤</p>}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-3 col-form-label">
            密碼
          </label>
          <div className="col-9">
            <input
              id="password"
              type="password"
              {...register('password', { required: true })}
              className="form-control"
            />
            {errors?.password?.type === 'required' && <p className="text-danger mb-0 mt-1">密碼必填</p>}
          </div>
        </div>
      </div>

      <div className="modal-footer d-flex justify-content-between">
        <div>
          <button type="button" className="btn btn-warning me-2" onClick={context.changeRecoverPassword}>
            忘記密碼
          </button>
          <button type="button" className="btn btn-secondary" onClick={context.changeSignUp}>
            註冊
          </button>
        </div>
        <button type="submit" className="btn btn-primary">
          登入
        </button>
      </div>
    </form>
  );
};

export default SignIn;
