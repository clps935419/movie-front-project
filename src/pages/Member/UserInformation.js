import { useState } from 'react';

import EditMember from './components/EditMember';
import UpdatePassword from './components/UpdatePassword';

const UserInformation = () => {
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  return (
    <>
      {isUpdatePassword ? (
        <div className="text-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              setIsUpdatePassword(false);
            }}
          >
            返回會員資料
          </button>
        </div>
      ) : (
        <div className="text-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              setIsUpdatePassword(true);
            }}
          >
            修改密碼
          </button>
        </div>
      )}
      {isUpdatePassword ? <UpdatePassword /> : <EditMember />};
    </>
  );
};

export default UserInformation;
