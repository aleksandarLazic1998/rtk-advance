import React, { ReactNode } from 'react';

import { AppLayout } from '../../layout/AppLayout/AppLayout';

interface IProps {
	children: ReactNode;
}

export const PrivateRoute = ({ children }: IProps) => {
	return <AppLayout>{children}</AppLayout>;
};
