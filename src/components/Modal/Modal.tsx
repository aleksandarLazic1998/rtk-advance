import React from 'react';

import ReactModal from 'react-modal';

export const Modal = () => {
	return (
		<ReactModal
			ariaHideApp={false}
			className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%]"
			isOpen
			shouldCloseOnOverlayClick
			style={{ overlay: { backgroundColor: 'rgba(211, 213, 215, 0.8)' } }}
		>
			<div>BOBA</div>
		</ReactModal>
	);
};
