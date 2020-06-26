import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PropTypes } from "prop-types";
import s from "./modal.module.scss";

export default function Bonus(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="" className={`p-0`} onClick={toggle}>
        <span><i>&#8250;</i> <u>СНЯТЬ БОНУСЫ</u></span>
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          СНЯТЬ БОНУСЫ
        </ModalHeader>

        <ModalBody>
          СНЯТЬ БОНУСЫ
        </ModalBody>

        <ModalFooter>
          <Button onClick={toggle}>СНЯТЬ БОНУСЫ</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
  scrollable: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  innerRef: PropTypes.object,
  unmountOnClose: PropTypes.bool,
  returnFocusAfterClose: PropTypes.bool,
};
