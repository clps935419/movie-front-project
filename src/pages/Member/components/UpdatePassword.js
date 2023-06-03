import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { selectAuth } from '@/store/slice/authSlice';
import { apiUser } from '@/api';

const { updatePassword } = apiUser;

const UpdatePassword = () => {
  const { email } = useSelector(selectAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: email,
      password: '',
      passwordCheck: '',
    },
  });

  const onSubmit = async (data, e) => {
    await updatePassword({ data }).then(({ data }) => {
      if (data.status === 'success') {
        e.target.reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          電子信箱
        </label>
        <input type="email" className="form-control" autoComplete="off" disabled id="email" value={email} />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          密碼
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register('password', { required: true, pattern: /^.{8,}$/ })}
        />
        {errors?.password?.type === 'required' && <p className="text-danger mb-0 mt-1">密碼必填</p>}
        {errors?.password?.type === 'pattern' && <p className="text-danger mb-0 mt-1">密碼最少須 8 個字</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="passwordCheck" className="form-label">
          確認密碼
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordCheck"
          {...register('passwordCheck', { required: true, pattern: /^.{8,}$/ })}
        />
        {errors?.passwordCheck?.type === 'required' && <p className="text-danger mb-0 mt-1">確認密碼必填</p>}
        {errors?.passwordCheck?.type === 'pattern' && <p className="text-danger mb-0 mt-1">確認密碼最少須 8 個字</p>}
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
          修改密碼
        </button>
      </div>
    </form>
  );
};

export default UpdatePassword;
