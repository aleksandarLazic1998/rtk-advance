import React, { ReactNode } from 'react';

import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import './AppLayout.css';

interface IProps {
	children: ReactNode;
}

export function AppLayout({ children }: IProps) {
	return (
		<div className="app-layout">
			<Sidebar />
			<div className="main-component">
				<Navbar />
				<div className="main-component__section">{children} </div>
			</div>
		</div>
	);
}
