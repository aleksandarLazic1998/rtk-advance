import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TestComponent } from 'test/TestComponent';

import { Sidebar } from '../Sidebar';

beforeEach(() => {
	render(
		<TestComponent>
			<Sidebar />
		</TestComponent>
	);
});

test('It should render sidebar', () => {
	const SidebarComponent = screen.getByTestId('sidebar');
	expect(SidebarComponent).toBeVisible();
});
