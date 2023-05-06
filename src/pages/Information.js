import { useNavigate } from 'react-router-dom';
import NiceModal from '@ebay/nice-modal-react';
import ExampleModal from '../components/Modal/ExampleModal';

function Information() {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          navigate('/member');
        }}
      >
        前往會員資訊
      </button>

      <button
        type="button"
        style={{ marginTop: '200px' }}
        className="btn btn-primary"
        onClick={() => {
          NiceModal.show(ExampleModal, {
            headerContent: 'alert_delete_sure',
            bodyContent: (
              <>
                <div className="fw-bolder mb-2">text_are_you_sure_delete:</div>
              </>
            ),
          });
        }}
      >
        測試
      </button>
    </>
  );
}
export default Information;
