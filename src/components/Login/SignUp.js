import { useContext } from 'react';
import { apiUser } from '@/api';
import LoginContext from './store/LoginContext';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setAuth } from '../../store/slice/authSlice';

const { postSignup } = apiUser;
const SignUp = ({ closeModal }) => {
  const dispatch = useDispatch();

  const context = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await postSignup({ data }).then(({ data }) => {
      if (data.status === 'success') {
        const { _id, email, token } = data.data;
        dispatch(setAuth({ uid: _id, email, token, time: '20000' }));
        closeModal();
      }
    });
  };

  const handleBackSignIn = () => {
    context.changeSignIn();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">會員註冊</h5>
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
                {...register('password', { required: true, pattern: /^.{8,}$/ })}
                className="form-control"
              />
              {errors?.password?.type === 'required' && <p className="text-danger mb-0 mt-1">密碼必填</p>}
              {errors?.password?.type === 'pattern' && <p className="text-danger mb-0 mt-1">密碼最少須 8 個字</p>}
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="passwordCheck" className="col-3 col-form-label">
              確認密碼
            </label>
            <div className="col-9">
              <input
                id="passwordCheck"
                type="password"
                {...register('passwordCheck', { required: true, pattern: /^.{8,}$/ })}
                className="form-control"
              />
              {errors?.passwordCheck?.type === 'required' && <p className="text-danger mb-0 mt-1">確認密碼必填</p>}
              {errors?.passwordCheck?.type === 'pattern' && (
                <p className="text-danger mb-0 mt-1">確認密碼最少須 8 個字</p>
              )}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={handleBackSignIn}>
            返回登入
          </button>
          <button type="submit" className="btn btn-primary">
            註冊
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
