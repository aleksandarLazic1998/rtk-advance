import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from 'test/TestComponent';

import { Sidebar } from '../Sidebar';

beforeEach(() => {
	renderWithProviders(<Sidebar />);
});

test('It should render sidebar', () => {
	const SidebarComponent = screen.getByTestId('sidebar');

	expect(SidebarComponent).toBeVisible();
});
