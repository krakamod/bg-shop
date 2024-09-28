import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductAddPage from './ProductAddPage';

describe('ProductAddPage', () => {
  test('renders the form fields', () => {
    render(<ProductAddPage />);
    expect(screen.getByLabelText(/Product Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Images/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Stock Quantity/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/SKU/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Shipping Information/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Weight/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Variants/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tags and Keywords/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/SEO Settings/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visibility/i)).toBeInTheDocument();
  });

  test('validates form fields and shows error messages', () => {
    render(<ProductAddPage />);
    fireEvent.click(screen.getByText(/Save as Draft/i));
    expect(screen.getByText(/Product title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Product description is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Category is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Price is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Stock quantity is required/i)).toBeInTheDocument();
    expect(screen.getByText(/SKU is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Shipping information is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Product weight is required/i)).toBeInTheDocument();
  });

  test('submits the form successfully', async () => {
    render(<ProductAddPage />);
    fireEvent.change(screen.getByLabelText(/Product Title/i), { target: { value: 'Test Product' } });
    fireEvent.change(screen.getByLabelText(/Product Description/i), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: 'strategy' } });
    fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText(/Stock Quantity/i), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText(/SKU/i), { target: { value: 'TESTSKU' } });
    fireEvent.change(screen.getByLabelText(/Shipping Information/i), { target: { value: 'Test Shipping Info' } });
    fireEvent.change(screen.getByLabelText(/Product Weight/i), { target: { value: '1' } });
    fireEvent.click(screen.getByText(/Save as Draft/i));
    expect(await screen.findByText(/Product saved successfully/i)).toBeInTheDocument();
  });
});
