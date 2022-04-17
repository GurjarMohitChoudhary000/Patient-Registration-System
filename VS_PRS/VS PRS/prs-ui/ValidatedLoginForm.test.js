import { render, screen } from '@testing-library/react';
import ValidatedLoginForm from './src/ValidatedLoginForm';


test('renders learn react link', () => {
    render(<ValidatedLoginForm />);
    screen.debug();
});