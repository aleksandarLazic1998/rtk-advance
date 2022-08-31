import React from 'react';

import ReactModal from 'react-modal';

import { useGlobalState } from '../../store/hooks';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundaries';
import { ModalComponents } from './Components';

export const Modal = () => {
	const { modal } = useGlobalState((state) => state.app);

	const isModalOpen = modal !== '';

	return (
		<ErrorBoundary>
			<ReactModal
				ariaHideApp={false}
				className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%]"
				isOpen={isModalOpen}
				shouldCloseOnOverlayClick
				style={{ overlay: { backgroundColor: 'rgba(211, 213, 215, 0.8)' } }}
			>
				{ModalComponents[modal]}
			</ReactModal>
		</ErrorBoundary>
	);
};
