import React, { useState } from 'react';

import { Bars4Icon } from '@heroicons/react/24/solid';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div
			data-testid="sidebar"
			className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}
		>
			<button
				data-testid="sidebar-toggler"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				<Bars4Icon className="h-6 w-6 text-blue-500" />
				{isSidebarOpen && (
					<div className="sidebar__nav-links">
						<NavLink to="/" onClick={(e) => e.stopPropagation()}>
							Home
						</NavLink>
					</div>
				)}
			</button>
		</div>
	);
};
