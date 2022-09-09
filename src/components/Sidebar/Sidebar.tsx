import React, { useState } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Sidebar.css';
import { SvgIcon } from '@mui/material';
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
				<SvgIcon
					data-testid="sidebar-icon"
					component={isSidebarOpen ? ArrowBackIosIcon : ArrowForwardIosIcon}
					inheritViewBox
				/>
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
