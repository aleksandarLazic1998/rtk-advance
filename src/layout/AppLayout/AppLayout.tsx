import React, { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: IProps) => {
	return <div>{children}</div>;
};
