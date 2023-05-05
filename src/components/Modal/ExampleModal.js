import { Modal, Button, Form } from "react-bootstrap";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ModalRwdTemplate from "./ModalRwdTemplate";

/**
 * @description: 用來做簡易確認的通用modal，body只有文字敘述與圖標，且button只有confirm/cancel
 * @param {
 * }
 * @return
 */
export default NiceModal.create(
  ({
    headerContent,
    bodyContent,
    confirmCallback = () => {},
    cancelCallback = () => {},
  }) => {
    const modal = useModal();

    function handleClose() {
      modal.remove();
    }
    return (
      <ModalRwdTemplate
        size="sm"
        isShow={modal.visible}
        onHide={handleClose}
        headerContent={<Modal.Title>{headerContent}</Modal.Title>}
        bodyContent={bodyContent}
        bodyStyle={{ minHeight: "120px" }}
        footerContent={
          <>
            <Button
              variant="outline-primary"
              onClick={() => {
                cancelCallback();
                modal.remove();
              }}
            >
              cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                confirmCallback();
                modal.remove();
              }}
            >
              confirm
            </Button>
          </>
        }
      />
    );
  }
);
