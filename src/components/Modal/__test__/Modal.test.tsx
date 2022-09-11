import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TestComponent } from 'test/TestComponent';

import { Modal } from '../Modal';

beforeEach(() => {
	render(
		<TestComponent>
			<Modal />
		</TestComponent>
	);
});

test('It should open modal when modal state in redux is not equal to empty string', () => {
	const ModalComponent = screen.getByTestId('modal');
});
