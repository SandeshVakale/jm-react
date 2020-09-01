import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders This is a page for beauty Product search', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This is a page for beauty Product search/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input', () => {
  const { getByPlaceholderText } = render(<App />);
  const linkElement = getByPlaceholderText(/Product Name/i);
  expect(linkElement).toBeInTheDocument();
});