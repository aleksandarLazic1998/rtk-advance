import React from 'react';

import ReactModal from 'react-modal';

import { useGlobalState } from '../../store/hooks';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundaries';
import { ModalComponents } from './Components';
import { customModalStyles } from './customModalStyles';

export const Modal = () => {
	const { modal } = useGlobalState((state) => state.app);
	const isModalOpen = modal !== '';

	return (
		<ErrorBoundary>
			<ReactModal
				ariaHideApp={false}
				isOpen={isModalOpen}
				shouldCloseOnOverlayClick
				style={customModalStyles}
			>
				{ModalComponents[modal]}
			</ReactModal>
		</ErrorBoundary>
	);
};
