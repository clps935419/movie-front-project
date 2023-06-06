import { Button, Modal } from 'react-bootstrap';

export default function NoticeModal({ show, modalContent, onHide }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {modalContent.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {modalContent.content}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>確定</Button>
            </Modal.Footer>
        </Modal>
    )
};
