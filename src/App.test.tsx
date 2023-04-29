import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Alert from './components/alert/Alert';

test('renders learn react link', () => {
  render(<Alert data={{message:'Good Mroning',color:'red'}} />);
  const linkElement = screen.getByText(/alert/i);
  expect(linkElement).toBeInTheDocument();
});

