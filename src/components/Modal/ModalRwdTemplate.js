import { Modal, Button } from "react-bootstrap";

function ModalRwdTemplate(props) {
  const {
    onHide = () => {},
    isShow = false,
    headerContent,
    bodyContent,
    footerContent,
    headerStyle = {},
    bodyStyle = {},
    footerStyle = {},
    closeButton=true,
    ...other
  } = props;
  return (
    <Modal
      show={isShow}
      onHide={onHide}
      scrollable
      centered
      size="lg"
      fullscreen={"md-down"}
      dialogClassName="modal-rwd-template"
      {...other}
    >
      <Modal.Header
        closeButton={closeButton}
        className="modal-rwd-header"
        style={headerStyle}
        closeVariant={"black"}
      >
        {headerContent}
      </Modal.Header>
      <Modal.Body className="modal-rwd-body" style={bodyStyle}>
        {bodyContent}
      </Modal.Body>
      {footerContent && (
        <Modal.Footer style={footerStyle}>{footerContent}</Modal.Footer>
      )}
    </Modal>
  );
}
export default ModalRwdTemplate;
