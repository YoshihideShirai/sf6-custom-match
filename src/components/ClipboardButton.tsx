import { useState } from 'react';
import { Props } from '../types/Defs';
import { copyClipboard } from '../api/Utils';
import { createButton,createSvgIcon } from 'react-social-login-buttons';
import { Modal, Button } from 'react-bootstrap';

function getSvgIcon() {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy"
      className="svg-inline--fa fa-copy fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
    </svg>
  );
}

const ButtonComp = createButton(
  {
    text: "クリップボードにコピー",
    icon: createSvgIcon(getSvgIcon),
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
  }
);

function ClipboardButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonComp onClick={() => copyClipboard(props.twdata, handleShow)} />
      <span>LINEやDiscordから募集する際、活用ください。</span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>クリップボードにコピー</Modal.Title>
        </Modal.Header>
        <Modal.Body>クリップボードにコピーしました。ペーストしてご利用ください。</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClipboardButton;