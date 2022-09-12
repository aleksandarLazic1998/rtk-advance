import React, { ReactNode } from 'react';

import { Message } from 'components/Message/Message';
import { Modal } from 'components/Modal/Modal';

import { AppLayout } from '../../layout/AppLayout/AppLayout';

interface IProps {
	children: ReactNode;
}

export const PrivateRoute = ({ children }: IProps) => {
	return (
		<AppLayout>
			<Modal />
			<Message />
			{children}
		</AppLayout>
	);
};
