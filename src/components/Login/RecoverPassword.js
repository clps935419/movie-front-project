import { useContext } from 'react';
import { apiUser } from '@/api';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import LoginContext from './store/LoginContext';

const { postRecoverPassword } = apiUser;
const RecoverPassword = ({ closeModal }) => {
  const context = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await postRecoverPassword({ data }).then(({ data }) => {
      if (data.status === 'success') {
        toast('送出密碼信箱', {
          type: 'success',
        });
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
          <h5 className="modal-title">忘記密碼</h5>
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
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={handleBackSignIn}>
            返回登入
          </button>
          <button type="submit" className="btn btn-primary">
            送出
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecoverPassword;
